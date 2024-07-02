import Navbar from '../../components/navbar/navbar'
import MenuItems from '../../components/menu/menu';
import Footer from '../../components/footer/footer';

const Menu = () => {
  return (
    <section>
        <Navbar />
        <div className='mt-10 lg:mt-24'>
          <MenuItems name={'Menu'} />
        </div>
        <Footer />
    </section>
  )
}

export default Menu