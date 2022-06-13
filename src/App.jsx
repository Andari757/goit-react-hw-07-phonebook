import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import ContactsPage from 'pages/ContactsPage/ContactsPage';
export function App() {

  // const location = useLocation();

  // const navigate = useNavigate();

  // useEffect(() => {


  //   if (!isLoggedIn && !(location.pathname.startsWith('/login') || location.pathname.startsWith('/register'))) {
  //     navigate("/login");
  //   }
  //   if (isLoggedIn && (location.pathname.startsWith('/login') || location.pathname.startsWith('/register'))) {
  //     navigate("/contacts");
  //   }
  // }, [isLoggedIn, location.pathname, navigate]);



  return (

    <ContactsPage />






    // <Routes>
    //   {isLoggedIn && <Route path="/contacts" element={<ContactsPage />} />}
    //   {!isLoggedIn && <Route path="/register" element={<RegisterPage />} />}
    //   {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
    //   <Route path="*" element={<Navigate to={defaultRoute} />} />
    // </Routes>
  )

}
