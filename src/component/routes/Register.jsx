import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex flex-col justify-center items-center my-8">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Registration</h2>

                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="user name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    </div>
                    <button type="button" className="w-full px-8 py-3 mb-4 font-semibold rounded-md bg-blue-600 text-gray-50">Sign up</button>
                    <h2>Have an account? Go to <Link to='/login' className="font-bold">Login</Link></h2>
                </form>
                </div>

        </div>
    );
};

export default Register;