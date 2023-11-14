const isAuthenticated = localStorage.getItem("token") !== null;
if (!isAuthenticated) {
  return <Navigate to="/home" />;
}

export default isAuthenticated;
