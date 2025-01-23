import { useState } from 'react';
import { Link } from 'react-router-dom';
import'../../css/Navbar.css';
const Navbar=()=>{
    var [dropdown,showDropdown]=useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown)
        
    }
    return(
        <header>
        <nav>
            <ol>
                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/about' className="link">About</Link></li>
                <li><Link to='/gallery' className="link">Gallery</Link></li>
                <li><Link to='/contact' className="link">Contact</Link></li>
                <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} style={{ position: 'relative', display: 'inline-block' }}>
                        <span style={{color:'black'}}>Hooks</span>
                        {dropdown && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                listStyle: 'none',
                                margin: 0,
                                padding: '10px',
                                color:'black',

                                backgroundColor: 'purple',
                                boxShadow: '0px 4px 6px black',
                                borderRadius: '10px',
                                zIndex: 1,
                            }}>
                        <li><Link to='/useState' className='link'>useState</Link></li>
                        <li><Link to='/useEffect' className='link'>useEffect</Link></li>
                        <li><Link to='/useapi 'className="link">UseEffectAPI</Link></li>
                        <li><Link to='/usereducer 'className="link">UseReducer</Link></li>
                        <li><Link to='/useimage 'className="link">UseEffectAPIImage</Link></li>
                        <li><Link to='/useref 'className="link">UseRef</Link></li>
                        <li><Link to='/usememo 'className="link">UseMemo</Link></li>
                        <li><Link to='/usecallback 'className="link">UseCallBack</Link></li>
                    </ul>)}
                </div>
                <li><Link to='/signup 'className="link">SignUp</Link></li>
                <li><Link to='/login 'className="link">Login</Link></li>

            </ol>
        </nav>
        </header>
    )
}
export default Navbar;