import React from 'react'
import { Container } from 'react-bootstrap';

// authorization url as required by spotify to log in
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=5774c067c5e14a54b1dfbf1fbf1bdaad&response_type=code&redirect_uri=http://localhost:8000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback%20usermodify-playback-state"

// login component that renders a centered button that goes to auth url when clicked
const Login = () => {
  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>Login With Spotify</a>
    </Container>
  )
}

export default Login;