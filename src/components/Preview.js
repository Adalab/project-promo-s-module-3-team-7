 import cover from "../images/cover.jpeg";

 import Card from "./Card";

 function Preview () {
    return ( 
        <section className='preview'>
          <img className='image' src={data.image || cover} alt='' />

          {/*   Card -  Almu */}
          <Card/>
        </section>
    );
 };

 export default Preview;