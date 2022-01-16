import { createContext, useContext, useState, useEffect } from "react";
import { firebaseAuth, database } from "../firebase"; // + , storage

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser
} from "firebase/auth";

import {
    ref,
    set,
    push,
    child,
    //update,
    onValue,
    remove,
    query,
    limitToFirst
} from "firebase/database";

const DatabaseContext = createContext();

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({ children }) {

  //==================== current logged user:
  //
  const [user, setUser] = useState(null);
  const [userPrivateData, setUserPrivateData] = useState();
  const [userPublicData, setUserPublicData] = useState();
  const [userBlogsList, setUserBlogsList] = useState();

  //============================ bloggers:
  //
  const [usersListOrderedByUserName, setUsersListOrderedByUserName] = useState();
  const [usersListOrderedByKeys, setUsersListOrderedByKeys] = useState();
  const [bloggerPublicData, setBloggerPublicData] = useState();
  const [bloggerBlogsList, setBloggerBlogsList] = useState();
  const [bloggerId, setBloggerId] = useState();

  //========================= blog
  const [blog, setBlog] = useState();
  const [blogsListOrderedByKeys, setBlogsListOrderedByKeys] = useState();
  const [blogKey, setBlogKey] = useState();

  //======================== article
  const [article, setArticle] = useState();
  const [articleKey, setArticleKey] = useState();

  //================================= auth & userData functions ==

  const signIn = (signInData) => {
    const email = signInData.email;
    const password = signInData.password;
    return signInWithEmailAndPassword(firebaseAuth, email, password)
      .catch((error) => {
        alert(error.message);
      });
  };

  const signUp = (signUpData) => {
    return createUserWithEmailAndPassword(firebaseAuth, signUpData.email, signUpData.password)
      .then((userCredential) => {
        // Signed in
        //setUser(userCredential.user);
        console.log("user is sign up. userCredential.user: ", userCredential.user);
        
        // create user in database:
        set(ref(database, "users/" + userCredential.user.uid), {
          privateData: {
            email: signUpData.email
          },
          publicData: {
            data: {
              firstName: signUpData.firstName,
              lastName: signUpData.lastName,
              userName: signUpData.userName
            }
          }          
        })
        .catch((error) => {
          alert(error.message);
        });

        // add user's public data into users list ordered by keys:
        set(ref(database, "users/listOrderedByKeys/" + userCredential.user.uid), {
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          userName: signUpData.userName
        })
        .catch((error) => {
          alert(error.message);
        });

        // add user's public data into users list ordered by user name:
        set(ref(database, "users/listOrderedByUserName/" + signUpData.userName), {
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          userId: userCredential.user.uid
        })
        .catch((error) => {
          alert(error.message);
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const updateUserPublicData = (userData) => {
    // save prev userName val:
    const prevUserName = userPublicData.userName;
    // update user data:
    set(ref(database, "users/" + user.uid + "/publicData/data"), {
      ...userData
    })
    .catch((error) => {
      alert(error.message);
    });

    // update user's public data in users list ordered by keys:
    set(ref(database, "users/listOrderedByKeys/" + user.uid), {
      ...userData
    })
    .catch((error) => {
      alert(error.message);
    });

    // update user's public data in users list ordered by user name:
    if (userData.userName === prevUserName) {
      // if userName wasn't updated:
      set(ref(database, "users/listOrderedByUserName/" + prevUserName), {
        firstName: userData.firstName,
        lastName: userData.lastName,
        userId: user.uid
      })
      .catch((error) => {
        alert(error.message);
      });
    } else {
      // if userName was updated:
      // delete prev userName record:
      remove(ref(database, "users/listOrderedByUserName/" + prevUserName))
      .then(() => console.log(prevUserName, "record was deleted from database."))
      .catch((error) => {
        alert(error.message);
      });
      // set new userName record:
      set(ref(database, "users/listOrderedByUserName/" + userData.userName), {
        firstName: userData.firstName,
        lastName: userData.lastName,
        userId: user.uid
      })
      .then(() => console.log(userData.userName, "record was added to database."))
      .catch((error) => {
        alert(error.message);
      });
    }
  };

  const logOut = async () => {
    try {
      await signOut(firebaseAuth);
      setUser(null);
    } catch (error) {
      alert(error.message);
    }
  };

  // THIS FUNCTION IS OFF FOR A MOMENT (delete this comment, when fix)
  // const deleteUserAccount = () => {
  //   console.log("deleteUser operations:");
  //   const userForDelete = firebaseAuth.currentUser;
  //   console.log("userForDelete:", userForDelete);
  //   const userIdForDelete = userForDelete.uid;
  //   console.log("userIdForDelete:", userIdForDelete);

  //   if (userForDelete && userIdForDelete) {
  //     // 1. delete user data first:
  //     remove(ref(database, "users/" + userForDelete.uid)).then(() => {
  //       console.log("User data of deleted user " + userIdForDelete + " was deleted...");
  //     }).catch((error) => {
  //       // An error ocurred
  //       alert(error.message);
  //     });

  //     // + delete user from two lists => [x]
      
  //     // 2. delete user blogs in for loop:
  //     // THIS WILL BE COMPLETELY ANOTHER PROCEDURE WHEN NEW RULES & DATA STRUCTURE WILL BE SET
  //     const userBlogsForDelete = Object.entries(blogs).filter(blog => blog[1].userId === userIdForDelete);
  //     console.log("userBlogsForDelete:", userBlogsForDelete);
  //     if (userBlogsForDelete && userBlogsForDelete.length) {
  //       let userBlogsKeysForDelete = [];
  //       for (let i = 0; i < userBlogsForDelete.length; i++) {
  //         const key = userBlogsForDelete[i][0];
  //         userBlogsKeysForDelete.push(key);
  //       }
  //       console.log("userBlogsKeysForDelete:", userBlogsKeysForDelete);
  //       if (userBlogsKeysForDelete && userBlogsKeysForDelete.length) {
  //         for (let n = 0; n < userBlogsKeysForDelete.length; n++) {
  //           const key = userBlogsKeysForDelete[n];
  //           remove(ref(database, "blogs/" + key)).then(() => {
  //             console.log("Blog " + key + " of deleted user " + userIdForDelete + " was deleted...");
  //             // 3. delete user in the last loop
  //             if (n === userBlogsKeysForDelete.length - 1) {
  //               // eslint-disable-next-line no-restricted-globals
  //               const confirmAccountDeletion = confirm("Your blogs & user data was deleted. Now press OK to delete your account");
  //               if (confirmAccountDeletion) {
  //                 deleteUser(userForDelete).then(() => {
  //                   console.log("User " + userIdForDelete + " was deleted.");
  //                 }).catch((error) => {
  //                   alert(error.message, "Try again to delete your account. Your blogs & user data were already deleted.");
  //                 });
  //               }
  //             }
  //           }).catch((error) => {
  //             // An error ocurred
  //             alert(error.message);
  //           });
  //         }
  //       } else {
  //         console.log("There are no user blogs to delete... So delete user.");
  //         // eslint-disable-next-line no-restricted-globals
  //         const confirmAccountDeletion = confirm("Your blogs & user data was deleted. Now press OK to delete your account");
  //         if (confirmAccountDeletion) {
  //           deleteUser(userForDelete).then(() => {
  //             console.log("User " + userIdForDelete + " was deleted.");
  //           }).catch((error) => {
  //             alert(error.message, "Try again to delete your account. Your blogs & user data were already deleted.");
  //           });
  //         }
  //       }
  //     } else {
  //       console.log("There are no user blogs to delete... So delete user.");
  //       // eslint-disable-next-line no-restricted-globals
  //       const confirmAccountDeletion = confirm("Your blogs & user data was deleted. Now press OK to delete your account");
  //       if (confirmAccountDeletion) {
  //         deleteUser(userForDelete).then(() => {
  //           console.log("User " + userIdForDelete + " was deleted.");
  //         }).catch((error) => {
  //           alert(error.message, "Try again to delete your account. Your blogs & user data were already deleted.");
  //         });
  //       }
  //     }  
  //   } else {
  //     alert("You need to be signed in to delete your account. Try again!")
  //   }
  // }

  //============================== fetch ===========================
  //
  function fetchUsersListOrderedByUserName() {
    const listRef = query(ref(database, "users/listOrderedByUserName"), limitToFirst(10));
    onValue(listRef, (snapshot) => {
      const data = snapshot.val();
      console.log("users list ordered by user name object:", data);
      setUsersListOrderedByUserName(data);
    });
  }

  function fetchUsersListOrderedByKeys() {
    const listRef = query(ref(database, "users/listOrderedByKeys"), limitToFirst(10));
    onValue(listRef, (snapshot) => {
      const data = snapshot.val();
      console.log("users list ordered by user id object:", data);
      setUsersListOrderedByKeys(data);
    });
  }

  function fetchBloggerPublicData(userId) {
    const bloggerPublicDataRef = ref(database, "users/" + userId + "/publicData/data");
    onValue(bloggerPublicDataRef, (snapshot) => {
      const data = snapshot.val();
      console.log("blogger public data object:", data);
      setBloggerPublicData(data);
    });
  }

  function fetchBloggerBlogsList(userId) {
    const bloggerBlogsListRef = ref(database, "users/" + userId + "/publicData/blogs");
    onValue(bloggerBlogsListRef, (snapshot) => {
      const data = snapshot.val();
      console.log("blogger blogs list object:", data);
      setBloggerBlogsList(data);
    });
  }

  //============== fetch user
  //
  function fetchUserBlogsList(userId) {
    const currentUserDataRef = ref(database, "users/" + userId + "/publicData/blogs");
    onValue(currentUserDataRef, (snapshot) => {
      const data = snapshot.val();
      console.log("current user blogs list data object:", data);
      setUserBlogsList(data);
    });
  }

  //============= fetch blog
  //
  function fetchBlog(blogKey) {
    const blogRef = ref(database, "blogs/" + blogKey);
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      console.log("blog object:", data);
      setBlog(data);
    });
  }

  //============= fetch article
  function fetchArticle(articleKey) {
    const articleRef = ref(database, "articles/" + articleKey);
    onValue(articleRef, (snapshot) => {
      const data = snapshot.val();
      console.log("article object:", data);
      setArticle(data);
    });
  }

  //=============== get

  function getArticleKeyByLink(articleLink) {
    const articleRef = ref(database, "articles/listOrderedByLinks/" + articleLink);
    onValue(articleRef, (snapshot) => {
      const data = snapshot.val();
      console.log("article key:", data.key);
      setArticleKey(data.key);
    });
  }

  function getBlogKeyByLink(blogLink) {
    const blogRef = ref(database, "blogs/listOrderedByLinks/" + blogLink);
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      console.log("blog key:", data.key);
      setBlogKey(data.key);
    });
  }

  function getBloggerIdByUserName(userName) {
    const bloggerRef = ref(database, "users/listOrderedByUserName/" + userName);
    onValue(bloggerRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log("blogger id got by user name:", data.userId);
        setBloggerId(data.userId);
      } else {
        console.log("There is no user with user name:", userName);
      }
    });
  }

  //function getBlogKeyByBlogLink(blogLink) 

  //====================================================

  const addBlog = (blogData) => {

    const newBlogKey = push(child(ref(database), "blogs")).key;

    if (newBlogKey) {
      set(ref(database, "blogs/" + newBlogKey), {
        ...blogData,
        author: userPublicData.firstName + " " + userPublicData.lastName,
        userName: userPublicData.userName,
        userId: user.uid,
      });
    }
  }

  const deleteBlog = (blogKey) => {
    remove(ref(database, "blogs/" +  blogKey)).then(() => {
      console.log("blog " + blogKey + " was deleted");
    }).catch((error) => {
      // An error ocurred
      console.log(error.message);
    });
  }

  const updateBlog = (blogKey, updatedBlogData) => {
    set(ref(database, "blogs/" + blogKey), {
      ...updatedBlogData
    });
  };

  const addArticle = (blogKey, blogTitle, article) => {

    const newArticleKey = push(child(ref(database), "blogs/" + blogKey + "/articles/")).key;

    if (newArticleKey) {
      set(ref(database, "blogs/" + blogKey + "/articles/" + newArticleKey), {
        ...article,
        author: userPublicData.firstName + " " + userPublicData.lastName,
        userName: userPublicData.userName,
        userId: user.uid,
        blogKey: blogKey,
        blogTitle: blogTitle
      });
    }
  }

  const updateArticle = (blogKey, articleKey, updatedArticleData) => {
    if (updatedArticleData) {
      set(ref(database, "blogs/" + blogKey + "/articles/" + articleKey), {
        ...updatedArticleData
      });
    } else {
      alert("There is no data to update... The article isn't updated.");
    }
  }

  const deleteArticle = (blogKey, articleKey) => {
    remove(ref(database, "blogs/" +  blogKey + "/articles/" + articleKey)).then(() => {
      console.log("article " + articleKey + " in blog " + blogKey + " was deleted");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  function fetchBlogsListOrderedByKeys() {
    const listRef = query(ref(database, "blogs/listOrderedByKeys"), limitToFirst(10));
    onValue(listRef, (snapshot) => {
      const data = snapshot.val();
      console.log("blogs list ordered by keys:", data);
      setBlogsListOrderedByKeys(data);
    });
  }

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        console.log("user logged in. user:", user);
        //setUserPrivateData
        const userPrivateDataRef = ref(database, "users/" + user.uid + "/privateData");
        onValue(userPrivateDataRef, (snapshot) => {
          const data = snapshot.val();
          console.log("user private data:", data);
          setUserPrivateData(data);
        });
        //setUserPublicData
        const userPublicDataRef = ref(database, "users/" + user.uid + "/publicData/data");
        onValue(userPublicDataRef, (snapshot) => {
          const data = snapshot.val();
          console.log("user public data:", data);
          setUserPublicData(data);
        });
        // check
        //getEverything()
      } else {
        setUser(null);
        setUserPrivateData(null);
        setUserPublicData(null);
        console.log("user is logged out");
        // check
        //getEverything()
      }
    });
  }, []);

  // check if its possible to download the whole database:
  function getEverything() {
    const usersRef = ref(database, "users");
    onValue(usersRef, snapshot => {
      const data = snapshot.val();
      console.log("users:", data);
    });
  }

  const value = {
    signIn,
    signUp,
    logOut,
    user,
    userPrivateData,
    userPublicData,
    //=== users lists:
    fetchUsersListOrderedByKeys,
    fetchUsersListOrderedByUserName,
    usersListOrderedByKeys,
    usersListOrderedByUserName,
    //=== blogger:
    fetchBloggerPublicData,
    bloggerPublicData,
    fetchBloggerBlogsList,
    bloggerBlogsList,
    getBloggerIdByUserName,
    bloggerId,
    setBloggerId,
    //====== blog:
    blog,
    fetchBlog,
    getBlogKeyByLink,
    blogKey,
    //===== article:
    article,
    articleKey,
    fetchArticle,
    getArticleKeyByLink,
    //====================
    fetchUserBlogsList,
    userBlogsList,
    updateUserPublicData,
    blogsListOrderedByKeys,
    fetchBlogsListOrderedByKeys,
    deleteBlog,
    addBlog,
    updateBlog,
    addArticle,
    deleteArticle,
    updateArticle,
    //deleteUserAccount
  }

  return (
    <DatabaseContext.Provider value={value} >{children}</DatabaseContext.Provider>
  );
}
