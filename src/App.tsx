import React from 'react';
import {CardProfileStyleOne} from "./components/CardProfileStyleOne/CardProfileStyleOne";
import {MasterHeadStyleOne} from "./components/MasterHead/MasterHead";
import {AppBase} from './App.style';
import {FeatureStyleOne} from "./components/FeatureStyleOne/FeatureStyleOne";
import {PricingSytleOne} from "./components/PricingStyleOne/PricingStyleOne";
import {FooterMenuStyleOne} from "./components/FooterMenuStyleOne/FooterMenuStyleOne";
import {FooterCopyrightStyleOne} from "./components/FooterCopyrightStyleOne/FooterCopyrightStyleOne";
import {MagazineStyleOne} from "./components/MagazineStyleOne/MagazineStyleOne";
import {BlogPostStyleOne} from "./components/BlogPostStyleOne/BlogPostStyleOne";
import {ContactusStyleOne} from "./components/ContactusStyleOne/ContactusStyleOne";

const App: React.FC = () => {

    return <AppBase>

        {/* Master head */}
        <MasterHeadStyleOne/>

        {/* Feature Style One */}
        <FeatureStyleOne title="Sed ut perspiciatis unde omnis iste natus."
                         caption="Sehen Sie sich an, was Sie mit diesem App-Thema machen können!"
        />

        {/* Magazine Style One */}
        <MagazineStyleOne title={"Sed ut perspiciatis unde omnis iste"}
                          caption={`Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                          nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui`}
        />

        {/* Blog Post Style one */}
        <BlogPostStyleOne category={"Auf der ganzen Welt"}/>

        {/*CardProfileSimple*/}
        <CardProfileStyleOne title={"Unsere Designerin"}
                             caption={`Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.
                        Nullam id dolor id nibh ultricies vehicula ut id elit.`}
        />

        {/* Pricing */}
        <PricingSytleOne title={"Preisgestaltung"}
                         caption={`Erstellen Sie mit diesem Bootstrap-Beispiel schnell eine effektive Preistabelle für Ihre potenziellen Kunden. 
                         Es besteht aus Standard-Bootstrap-Komponenten und -Dienstprogrammen mit nur wenigen Anpassungen.`}
        />

        {/* Contact Us */}
        <ContactusStyleOne title="Contact Us"
                           caption={`Lorem ipsum dolor sit amet consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.
                           Nullam id dolor id nibh ultricies vehicula ut id elit.`}
        />

        {/* Footer Menu */}
        <FooterMenuStyleOne/>

        {/* Footer Copyright */}
        <FooterCopyrightStyleOne copyrightYear={2019} copyrightCompany={"Big Company"}/>

    </AppBase>
}

export default App;
