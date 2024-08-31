import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';


const SignIn = () => {
    const handleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(userDocRef.data());
    };

    return (
        <div>
            <h1>I am the sign in page</h1>
            <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
    );
};
export default SignIn;