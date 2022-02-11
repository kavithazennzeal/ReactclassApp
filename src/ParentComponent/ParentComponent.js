import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import SearchComponent from '../SearchComponent/SearchComponent';
import TextComponent from '../TextComponent/TextComponent';
import ImageComponent from '../ImageComponent/ImageComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

class ParentComponent extends React.Component{
    render() {
         return(
            <div>
            <HeaderComponent/>
            <SearchComponent/>
            <TextComponent/>
            <ImageComponent/>
            <FooterComponent/>
    </div>
      
         )
    }
}
export default ParentComponent;