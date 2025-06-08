const Profile = () => {
    return (
        <div className="bg-base-200 min-h-screen flex items-start pt-10 px-4">
            <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-6">

                {/* Top Text Section */}
                <div className="text-center">
                    <h1 className="text-5xl text-cyan-700 font-bold">Login now!</h1>
                    <p className="py-4 text-gray-600">
                        Access your personalized dashboard, track your orders, and manage your gadget preferences all in one place. Sign in to continue enjoying a seamless shopping experience.
                    </p>
                </div>

                {/* Login Form */}
                <div className="card bg-base-100 w-full shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset space-y-4">
                            <div>
                                <label className="label text-xl text-cyan-700 p-2">Email</label>
                                <input type="email" className="input input-bordered w-full" placeholder="Email" />
                            </div>
                            <div>
                                <label className="label text-cyan-700 text-xl p-2">Password</label>
                                <input type="password" className="input input-bordered w-full" placeholder="Password" />
                            </div>
                            <div className="text-right">
                                <a className="link link-hover text-sm">Forgot password?</a>
                            </div>
                            <button className="btn btn-ghost text-white text-xl font-semibold bg-cyan-700 w-full">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
