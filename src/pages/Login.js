import Header from "../../components/Header";
import Login from "../../components/Login";
const LoginPage = () => {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-6 rounded-xl shadow-lg">
          <Header
            heading="Login to MyContact"
            paragraph="Don't have an account yet? "
            linkname="Signup"
            linkUrl="/signup"
          />
          <Login />
        </div>
      </div>
    </>
  );
};
export default LoginPage;
