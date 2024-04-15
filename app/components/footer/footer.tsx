import React from "react";




const Footer = () => {
  let year = new Date().getFullYear()
  return (
 

  
    <footer className="bg-slate-500 text-white mt-16 p-6 text-center border border-[#33353F]">
      
        <p className="text-white text-center">&copy; {year}, All Rights Reserved.</p>
        <p>Developed by <strong>Farrukh Zaman.</strong> </p>
        

    </footer>


  );
};

export default Footer;
