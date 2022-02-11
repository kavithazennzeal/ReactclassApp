import React from 'react';
import '../HeaderComponent/HeaderComponent.css';
class HeaderComponent extends React.Component{
render()
{
    return(
<div className="ReactProject">
    <header>
        <nav>
            <ul>
                <li><a href="#">HOME</a> </li>
                <li><a href="#">SERVICE</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#">PRICE</a></li>
                <li><a href="#">OFFER</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>
    </header>
</div>
    )
   
}
}
export default HeaderComponent;
