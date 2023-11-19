import React from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLogged, setisLogged] = useState(true);
  const [prod, setProd] = useState(false);


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [pass, seyPass] = useState("");
  const [email, setEmail] = useState("");

  
  useEffect(() => {
    axios("https://6549a154e182221f8d51b8a0.mockapi.io/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    axios("https://6549a154e182221f8d51b8a0.mockapi.io/products").then(
      (res) => {
        // console.log(res.data);
        setProducts(res.data);
      }
    );
  }, []);

  
  return (
    <div>
      <button>BABE here is home!</button>
    </div>
  );
}

export default Home;
