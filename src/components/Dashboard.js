import { useState } from "react";
import { database } from "../firebase";
import { ref, set, remove } from "firebase/database";
import { auth } from "../firebase";
import { deleteUser } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Dashboard({ userId, userData, fetchUserData }) {

    const [data, setData] = useState(userData);
    const [blogsList, setBlogsList] = useState(Object.entries(userData.blogs));

    function handleSubmit() {
        set(ref(database, 'users/' + userId), {
            ...data
        }).then(() => {
            fetchUserData(userId);
        })
    }

    function deleteAccount(userId) {
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            // User deleted
            console.log("user", user.uid, "account was deleted");
            remove(ref(database, 'users/' + userId));
        }).catch((error) => {
            // An error ocurred
            console.log(error.message);
        });
    }
    
    return (
        <div>
            <h1 className="text-center">Dashboard</h1>
            <hr />
            <div className="row">
                <div className="col-lg">
                    <h5 className="text-center">Your profile data</h5>
                    <hr />
                    <form>
                        <div className="mb-2">
                            <p>Your real first name:</p>
                            <input
                                type="input"
                                className="form-control"
                                defaultValue={data ? data.firstName : null }
                                onChange={(e) => setData({...data, firstName: e.target.value})}
                            />
                        </div>
                        <div className="mb-2">
                            <p>Your real last name:</p>
                            <input
                                type="input"
                                className="form-control"
                                defaultValue={data ? data.lastName : null}
                                onChange={(e) => setData({...data, lastName: e.target.value})}
                            />
                        </div>
                        <div className="mb-2">
                            <p>Your user name:</p>
                            <input
                                type="input"
                                className="form-control"
                                defaultValue={data ? data.userName : null}
                                onChange={(e) => setData({...data, userName: e.target.value})}
                            />
                        </div>
                        <div className="mb-2">
                            <p>Your email:</p>
                            <input
                                type="input"
                                className="form-control"
                                defaultValue={data ? data.email : null}
                                onChange={(e) => setData({...data, email: e.target.value})}
                            />
                        </div>
                        <Link
                            to="/dashboard"
                            type="button"
                            className="btn btn-success d-block mb-3"
                            onClick={handleSubmit}
                        >Save changes</Link>
                        <Link
                            to="/"
                            type="button"
                            className="btn btn-outline-danger d-block mb-3"
                            onClick={() => {
                                // eslint-disable-next-line no-restricted-globals
                                const wantToDelete = confirm("Are you sure, you want to delete your account & your articles forever? There's no turning back... Delete account?");
                                if (wantToDelete) {
                                    deleteAccount(userId);
                                }
                            }}
                        >Delete my account</Link>
                    </form>
                </div>
                <div className="col-lg">
                    <h5 className="text-center">Your blogs</h5>
                    <hr />
                    <Link
                        to="/create-blog"
                        type="button"
                        className="btn btn-info d-block my-3"
                    >Create new blog</Link>
                    {
                        blogsList ?
                            blogsList.map((blog) =>
                                <div key={blog[0]}>
                                    <h5>{blog[1].title}</h5>
                                    <p>{blog[1].description}</p>
                                    <hr />
                                </div>
                            )
                        :
                            <div>
                                <h5 className="text-center">There is no blogs yet... Create one!</h5>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}