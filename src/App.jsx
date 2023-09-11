import './App.css';
import * as React from 'react';
import cable from './cables.jpg'
import computer1 from './c1.jpeg'
import computer2 from './c2.jpg'
import computer3 from './c3.webp'
import computer4 from './c4.jpeg'
import computer5 from './c5.webp'
import computer6 from './c6.jpg'
import logo1 from './l1.jpg'
import cyber from './cyber.jpg'
import b from './b.png'
import file from './file.png'


function App() {

  return (
    <div className="App">
      <section>
        <div className='navbar'>
          <h4>Home</h4>
          <h4 className='secondheader'>About</h4>
        </div>
      </section>
      <section id="mainSection">
        <div className='boxonimage'>
          <h6 style={{ color: 'gray' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, nihil!</h6>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, consectetur!</h1>
          <p style={{ fontSize: '0.6rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, facilis soluta? Inventore, ab praesentium voluptatem quos ullam esse aliquid excepturi.</p>
          <button className='buttononimage' style={{ backgroundColor: 'lightgay', paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '4rem', paddingRight: '4rem', marginTop: '1rem', marginBottom: '2rem' }}>Read More</button>
        </div>
      </section>
      <section id='secondSection'>
        <div className='centralSection'>
          <div>
            <h1 style={{ display: 'flex', flexWrap: 'wrap' }}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora excepturi minima iusto dolorum distinctio obcaecati nemo neque a aliquid vel! Distinctio reiciendis blanditiis praesentium tempora placeat deleniti hic, aut natus ipsum provident, perspiciatis ipsam. Dicta in non, eum quod porro consectetur, ducimus laboriosam et illo ut sed aut neque.</p>
          </div>
        </div>
        <div style={{ marginLeft: '5rem' }}>
          <img style={{ width: '500px' }} src={cable} alt="Logo" />
        </div>
      </section>
      <section id='thirdSection'>
        <h1>Featured Courses</h1>
        <div className='cards'>
          <div className='firstCard'>
            <div>
              <img style={{ height: '24vh' }} src={computer1} alt="" />
              <h5>Lorem, ipsum.</h5>
              <p>12 TB</p>
              <p>70 Lakh</p>
              <button style={{ backgroundColor: 'lightgay', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '7rem', paddingRight: '7rem', marginTop: '1rem' }}>Read More</button>
            </div>
          </div>
          <div className='secondCard'>
            <div>
              <img style={{ height: '24vh' }} src={computer2} alt="" />
              <h5>Lorem, ipsum.</h5>
              <p>14 TB</p>
              <p>72 Lakh</p>
              <button style={{ backgroundColor: 'lightgay', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '7rem', paddingRight: '7rem', marginTop: '1rem' }}>Read More</button>
            </div>
          </div>
          <div className='thirdCard'>
            <div>
              <img style={{ height: '24vh' }} src={computer3} alt="" />
              <h5>Lorem, ipsum.</h5>
              <p>16 TB</p>
              <p>74 Lakh</p>
              <button style={{ backgroundColor: 'lightgay', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '7rem', paddingRight: '7rem', marginTop: '1rem' }}>Read More</button>
            </div>
          </div>
        </div>
        <div className='cards1'>
          <div className='firstCard'>
            <div>
              <img style={{ height: '24vh' }} src={computer4} alt="" />
              <h5>Lorem, ipsum.</h5>
              <p>12 TB</p>
              <p>70 Lakh</p>
              <button style={{ backgroundColor: 'lightgay', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '7rem', paddingRight: '7rem', marginTop: '1rem' }}>Read More</button>
            </div>
          </div>
          <div className='secondCard'>
            <div>
              <img style={{ height: '24vh' }} src={computer5} alt="" />
              <h5>Lorem, ipsum.</h5>
              <p>14 TB</p>
              <p>72 Lakh</p>
              <button style={{ backgroundColor: 'lightgay', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '7rem', paddingRight: '7rem', marginTop: '1rem' }}>Read More</button>
            </div>
          </div>
          <div className='thirdCard'>
            <div>
              <img style={{ height: '24vh' }} src={computer6} alt="" />
              <h5>Lorem, ipsum.</h5>
              <p>16 TB</p>
              <p>74 Lakh</p>
              <button style={{ backgroundColor: 'lightgay', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '7rem', paddingRight: '7rem', marginTop: '1rem' }}>Read More</button>
            </div>
          </div>
        </div>
      </section>
      <section id="fourthSection">
        <div className='logos'>
          <div>
            <img style={{ width: '10vw' }} src={logo1} alt="" />
          </div>
          <div>
            <img style={{ width: '10vw' }} src={logo1} alt="" />
          </div>
          <div>
            <img style={{ width: '10vw' }} src={logo1} alt="" />
          </div>
          <div>
            <img style={{ width: '10vw' }} src={logo1} alt="" />
          </div>
          <div>
            <img style={{ width: '10vw' }} src={logo1} alt="" />
          </div>
          <div>
            <img style={{ width: '10vw' }} src={logo1} alt="" />
          </div>
        </div>
      </section>
      <section id="fifthSection">
        <div className='fithMainSection'>
          <div style={{ width: '160vw' }} id="backgroundOfFifthSection">
            <p></p>
            <img style={{ height: '60vh', marginLeft: '15rem', marginTop: '6rem' }} src={cyber} alt="" />
          </div>
          <div style={{ backgroundColor: 'burlywood', paddingLeft: '4rem', paddingTop: '8rem', paddingRight: '8rem' }}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat consequatur deserunt vel perferendis labore.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla vel voluptates esse dicta blanditiis minus modi debitis. Nam voluptas eos deserunt libero officiis soluta officia expedita omnis autem aliquid doloremque deleniti et magni repellat, dolores quis quae sequi velit, ut alias voluptates mollitia aut? Veritatis vitae assumenda laboriosam nobis?</p>
          </div>
        </div>
      </section>
      <section className='sixthSection'>
        <div className='cards2'>
          <div className='newCard'>
            <div>
              <img style={{ height: '15vh', marginTop:'1rem' }} src={b} alt="" />
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque impedit magni esse totam quia voluptatem, tempora ab iste nemo, blanditiis cum perferendis reprehenderit fugit eum, reiciendis numquam non consequuntur excepturi. Sapiente, dicta in aut nam animi quidem tenetur quas rerum.</p>
            </div>
          </div>
          <div className='newCard' style={{marginLeft:'2rem'}}>
            <div>
            <img style={{ height: '15vh', marginTop:'1rem' }} src={file} alt="" />
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque impedit magni esse totam quia voluptatem, tempora ab iste nemo, blanditiis cum perferendis reprehenderit fugit eum, reiciendis numquam non consequuntur excepturi. Sapiente, dicta in aut nam animi quidem tenetur quas rerum.</p>
            </div>
          </div>
          <div className='newCard' style={{marginLeft:'2rem'}}>
            <div>
            <img style={{ height: '15vh', marginTop:'1rem' }} src={b} alt="" />
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque impedit magni esse totam quia voluptatem, tempora ab iste nemo, blanditiis cum perferendis reprehenderit fugit eum, reiciendis numquam non consequuntur excepturi. Sapiente, dicta in aut nam animi quidem tenetur quas rerum.</p>
            </div>
          </div>
          <div className='newCard' style={{marginLeft:'2rem'}}>
            <div>
            <img style={{ height: '15vh', marginTop:'1rem' }} src={file} alt="" />
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque impedit magni esse totam quia voluptatem, tempora ab iste nemo, blanditiis cum perferendis reprehenderit fugit eum, reiciendis numquam non consequuntur excepturi. Sapiente, dicta in aut nam animi quidem tenetur quas rerum.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="seventhSection">

      </section>
    </div >
  );
}

export default App;
