import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function CaptCha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleClick = async () => {
    const token = await executeRecaptcha('myAction');
    // Send the token to your server for verification
  }

  return (
    <button onClick={handleClick}>Verify</button>
  );
}

export default CaptCha;