import './App.css';
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import BlogsListPage from './components/BlogsListPage';
import BlogPage from './components/BlogPage';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import BloggersList from './components/BloggersList';
import UserProfile from './components/UserProfile';
import CreateBlogForm from './components/CreateBlogForm';
import CreateArticlePage from './components/CreateArticlePage';
import Footer from './components/Footer';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { database } from './firebase';

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const [bloggersList, setBloggersList] = useState(null);
  const [bloggerData, setBloggerData] = useState(null);

  const [blogKeyForNewArticle, setBlogKeyForNewArticle] = useState(null);
  const [blogTitleForNewArticle, setBlogTitleForNewArticle] = useState(null);

  const [currentBlogLink, setCurrentBlogLink] = useState(null);
  const [currentBlogKey, setCurrentBlogKey] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLogged(true);
        setUser(user);
        console.log("user is logged");
        fetchUserData(user.uid);
      } else {
        setIsUserLogged(false);
        setUser(null);
        console.log("user logged out");
        setUserData(null);
      }
    });
  }, []);

  function fetchUserData(userId) {
    const userDataRef = ref(database, 'users/' + userId);
    onValue(userDataRef, (snapshot) => {
        if (snapshot) {
          const fetchedUserData = snapshot.val();
          setUserData(fetchedUserData);
          console.log("User data fetched in the <App />", fetchedUserData);
        }
    });
  }

  function fetchBloggerData(bloggerId) {
    const bloggerDataRef = ref(database, 'users/' + bloggerId);
    onValue(bloggerDataRef, (snapshot) => {
        if (snapshot) {
          const fetchedBloggerData = snapshot.val();
          setBloggerData(fetchedBloggerData);
        }
    });
  }

  function getBloggersList() {
    const bloggersListRef = ref(database, 'users/');
    onValue(bloggersListRef, (snapshot) => {
        if (snapshot) {
          const bloggersListObject = snapshot.val();
          //console.log(bloggersListObject);
          const bloggersListArray = Object.entries(bloggersListObject);
          //console.log(Object.entries(bloggersListObject))
          setBloggersList(bloggersListArray);
        }
    });
  }
  
  return (
    <div className="App">
      <Header
        isUserLogged={isUserLogged}
        userNames={userData ? (userData.firstName + " " + userData.lastName) : (user ? user.email : null)}
        userName={userData ? userData.userName : null}
      />
      <div className="container" style={{marginTop: 120}}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs">
            <BlogsListPage
              setCurrentBlogKey={setCurrentBlogKey}
              setCurrentBlogLink={setCurrentBlogLink}
            />
          </Route>
          <Route path={currentBlogLink}>
            <BlogPage
              blogKey={currentBlogKey}
            />
          </Route>
          <Route path="/bloggers">
            {
              bloggersList ?
                <BloggersList
                  bloggersList={bloggersList}
                  fetchBloggerData={fetchBloggerData}
                />
              :
                getBloggersList()
            }
          </Route>
          <Route path="/login"><SignInForm /></Route>
          <Route path="/signup"><SignUpForm /></Route>
          {
            isUserLogged && user && userData ?
              <Route path="/create-blog">
                <CreateBlogForm
                  userId={user.uid}
                  userName={userData.userName} 
                  userFirstName={userData.firstName}
                  userLastName={userData.lastName} 
                />
              </Route>
            :
              null
          }
          {
            isUserLogged && user ?
              <Route path="/dashboard">
                <Dashboard
                  userId={user.uid}
                  setBlogKeyForNewArticle={setBlogKeyForNewArticle}
                  setBlogTitleForNewArticle={setBlogTitleForNewArticle}
                />
              </Route>
            :
              null
          }
          {
            bloggerData ?
              <Route path={`/${bloggerData.userName}`}>
                <UserProfile userData={bloggerData} />
              </Route>
            :
              null
          }
          {
            isUserLogged && user && blogKeyForNewArticle && blogTitleForNewArticle ? (
              <Route path="/create-article">
                <CreateArticlePage
                  userId={user.uid}
                  userName={userData.userName} 
                  userFirstName={userData.firstName}
                  userLastName={userData.lastName}
                  blogKey={blogKeyForNewArticle}
                  blogTitle={blogTitleForNewArticle} 
                />
              </Route>
            ) : (null)
          }
        </Switch>
        <hr />
        <div className="text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
