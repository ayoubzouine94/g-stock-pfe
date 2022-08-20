import React,{useState , useRef} from 'react';
import Header from './Header';
import Notes from './Notes';
import Footer from './Footer';
import Dates from './Dates';
import MainDetails from './MainDetails';
import TableForm from './TableForm';
import Table from './Table';
import ReactToPrint from "react-to-print";
import ClientDetails from './ClientDetails';

const Facture = () => {
  const [showFature, setShowFature] = useState(false);
  const [data, setData] = useState({
    name:"G-stock",
    adresse:"casablanca",
    email:"gstock@gmail.com",
    tele:"06234567890",
    bankName:"CIH BANQUE",
    numCompte:"234567890",
    webSite:"www.gstpck.ma",
    nomClient:"Hamza",
    clientAdresse:"Casablanca",
    numFacture:"23456789",
    dateFacture:"11/12/2020",
    dateEcheance:"2020/12/12",
    notes :"lorem epsom va jouer la balon avec mohamed "
  })

  const [description, setDescription] = useState('');
  const [quantitie, setQuantitie] = useState("");
  const [prix, setPrix] = useState("");
  const [total, setTotal] = useState("");
  const [list, setList] = useState([])
  const [totalSome, setTotalSome] = useState(0);

  const componentRef = useRef();

  const handleChange = (e) =>{
    const value = e.target.value;
    setData({...data,[e.target.name]: value});
    
};

  const handlePrint = () =>{
    window.print();
  }
  return (
    <>
    <main className="m-5 p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow">
    <ReactToPrint
           trigger={() => (
             <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
               Print / Download
             </button>
           )}
           content={() => componentRef.current}
         />
   {showFature ? 
       <div ref={componentRef}>
       <Header handlePrint={handlePrint} />
       <MainDetails name={data.name} adresse={data.adresse} />
       <ClientDetails
          nomClient={data.nomClient}
          clientAdresse={data.clientAdresse}
       />
       <Dates numFacture={data.numFacture} dateFacture={data.dateFacture} dateEcheance={data.dateEcheance}/>
       <Table list={list} 
       totalSome ={totalSome}
       setTolalSome ={setTotalSome}
       />
       <Notes note={data.notes} />
       <Footer 
          email={data.email} 
          tele={data.tele} 
          bankName={data.bankName} 
          numCompte={data.numCompte}
          webSite={data.webSite}
          />
       <button onClick={()=>setShowFature(false)} className="bg-blue-500 text-white 
         mt-5 font-bold py-2 px-8 rounded shadow border-2 
         border-blue-500 transition-all
         duration-300 hover:text-blue-500
         hover:bg-transparent 
         ">

       
       Modifier les informations</button>
     </div>
   :(
     <>
     <div className="flex flex-col justify-center">
       <article className="grid grid-cols-2 gap-5">
       <div>
       <label htmlFor="name">Nom :</label>
         <input
           type="text"
           name="name"
           id="name"
           placeholder="Tapez Le Nom"
           autoComplete="off"
           onChange={(e) => handleChange(e)}
           value={data.name}
             />
       </div>
       <div>
       <label htmlFor="adresse">Adresse : </label>
         <input
           type="text"
           name="adresse"
           id="adresse"
           placeholder="Tapez l'adresse"
           autoComplete="off"
           value={data.adresse}
           onChange={(e) => handleChange(e)}
             />
       </div>
       <div>
         <label htmlFor="email">Email :</label>
         <input
           type="text"
           name="email"
           id="email"
           placeholder="Tapez email"
           autoComplete="off"
           value={data.email}
           onChange={(e) => handleChange(e)}
             />
       </div>
       <div>
         <label htmlFor="tele"> Telephone :</label>
         <input
           type="text"
           name="tele"
           id="tele"
           placeholder="Tapez telephone"
           autoComplete="off"
           value={data.tele}
           onChange={(e) => handleChange(e)}
             />
       </div>
       <div>
         <label htmlFor="bankName">Banque : </label>
         <input
           type="text"
           name="bankName"
           id="bankName"
           placeholder="Tapez bankName"
           autoComplete="off"
           value={data.bankName}
           onChange={(e) => handleChange(e)}
             />
       </div>
       <div>
         <label htmlFor="numCompte"> Numero Compte :</label>
         <input
           type="text"
           name="numCompte"
           id="numCompte"
           placeholder="Tapez numCompte"
           autoComplete="off"
           value={data.numCompte}
           onChange={(e) => handleChange(e)}
             />
       </div>
       <div>
         <label htmlFor="webSite">  Site Web :</label>
         <input
           type="text"
           name="webSite"
           id="webSite"
           placeholder="Tapez webSite"
           autoComplete="off"
           value={data.webSite}
           onChange={(e) => handleChange(e)}
             />
       </div>
       <div>
         <label htmlFor="webSite">Nom Client :</label>
         <input
           type="text"
           name="nomClient"
           id="nomClient"
           placeholder="Tapez nomClient"
           autoComplete="off"
           value={data.nomClient}
           onChange={(e) => handleChange(e)}
             />
       </div>
       <div>
         <label htmlFor="clientAdresse"> Client Adresse : </label>
         <input
           type="text"
           name="clientAdresse"
           id="clientAdresse"
           placeholder="Tapez clientAdresse"
           autoComplete="off"
           value={data.clientAdresse}
           onChange={(e) => handleChange(e)}
             />
       </div>
       <div>
         <label htmlFor="numFacture"> Numero du Facture : </label>
         <input
           type="text"
           name="numFacture"
           id="numFacture"
           placeholder="Tapez numFacture"
           autoComplete="off"
           value={data.numFacture}
           onChange={(e) => handleChange(e)}
             />
       </div>
       <div>
         <label htmlFor="dateFacture"> Date Facture :</label>
         <input
           type="date"
           name="dateFacture"
           id="dateFacture"
           placeholder="Tapez date Facture"
           autoComplete="off"
           value={data.dateFacture}
           onChange={(e) => handleChange(e,data)}
             />
       </div>
       {/** this is our table */}
       <article className="grid grid-cols-2 gap-5">
              <TableForm 
                 description = {description}
                 setDescription = {setDescription}
                 quantitie = {quantitie}
                 setQuantitie = {setQuantitie}
                 prix = {prix}
                 setPrix = {setPrix}
                 total = {total}
                 setTotal ={setTotal}
                 list ={list}
                 setList={setList}
                 totalSome ={totalSome}
                 setTotalSome ={setTotalSome}

                 //description,quantitie,setQuantitie,setDescription,prix,setPrix
              />   
       </article>
       <div>
         <label htmlFor="dateEcheance"> date Echeance :</label>
         <input
           type="date"
           name="dateEcheance"
           id="dateEcheance"
           placeholder="Tapez dateEcheance"
           autoComplete="off"
           value={data.dateEcheance}
           onChange={(e) => handleChange(e,data)}
             />
       </div>
       <div className="">
         <label htmlFor="notes"> Note : </label>
         <textarea
           type="text"
           name="notes"
           id="notes"
           placeholder="Tapez les Notes"
           autoComplete="off"
           value={data.notes}
           onChange={(e) => handleChange(e,data)}
             />
       </div>
     </article>
     <button
         onClick={() =>setShowFature(true) }
         className="bg-blue-500 text-white 
         font-bold py-2 px-8 rounded shadow border-2 
         border-blue-500 transition-all
         duration-300 hover:text-blue-500
         hover:bg-transparent 
         ">Facturer</button>
     </div>
     
     </>
      
   )}

 
    </main>
 </>

  )
}

export default Facture