      import React from "react";
      import ReactDOM from "react-dom/client";

    const Title = () =>  {
        return <h1 className="head"> This is Namasthe React using JSX</h1>;
     }
     const number = 12344;
    const HeadingComponent = () => (
        <React.Fragment>  
     <div id="container">
        <h2>{number}</h2>
        <Title></Title>
        <Title/>
        {Title()}
       <h1 className="heading"> This is Namasthe React</h1>
     </div>
     <div id="container2">
        <h2>This is container2</h2>
     </div>
     </React.Fragment>  
  );

        console.log(HeadingComponent); //object
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<HeadingComponent/>);
        
   