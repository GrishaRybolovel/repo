interface PrivacyPolicyProps {
    onClose: () => void;
    lang: 'en' | 'ru';
}

export default function PrivacyPolicy({onClose, lang}: PrivacyPolicyProps) {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
          .popup {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5); /* Dark background with some transparency */
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1000; /* Ensure the popup is above other content */
            }
            
            /* Styles for the popup content container */
            .popup-content {
              background: white;
              padding: 20px;
              border-radius: 8px;
              position: relative;
              max-width: 800px; /* Adjust max width as needed */
              width: 90%; /* Responsive width */
              max-height: 90vh; /* Max height relative to viewport height */
              overflow-y: auto; /* Allow scrolling if content is too long */
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for better appearance */
            }
            
            /* Close button styling */
            .close-btn {
                position: fixed; /* Fix the button position relative to the viewport */
                top: 10px;
                right: 10px;
                background: transparent;
                border: none;
                font-size: 20px;
                cursor: pointer;
                color: #333;
                z-index: 2; /* Ensure the close button is always on top */
              }
            
            /* Privacy content styles */
            .privacy {
              font-size: 16px; /* Adjust font size for readability */
              color: #333; /* Dark color for text */
              line-height: 1.5; /* Improve readability */
              padding: 20px; /* Ensure padding around the content */
              box-sizing: border-box; /* Include padding and border in element's total width and height */
            }
            
            /* Heading styling inside privacy content */
            .privacy .second-title {
              font-size: 24px; /* Larger font size for headings */
              margin-bottom: 20px; /* Space below the heading */
              text-align: left; /* Align text to the left */
            }
            
            /* Additional styles for links */
            .privacy a {
              color: #007bff; /* Primary link color */
              text-decoration: underline; /* Underline links for better visibility */
            }
            
            /* Ensure correct styling for preformatted text blocks */
            .privacy pre {
              white-space: pre-wrap; /* Ensure proper wrapping of preformatted text */
            }
        `
            }}/>
            <div className="popup">
                <div className="popup-content">
                    <button className="close-btn" onClick={onClose}>X</button>
                    {lang === 'ru' ? (
                        <div className="privacy pt-24">
                            <h1 className="second-title" style={{textAlign: 'left'}}>
                                Политика конфиденциальности trendvi
                            </h1>
                            <br/>
                            Редакция политики конфиденциальности от 03.07.2024 года.
                            <br/>

                            <br/>
                            При регистрации в личном кабинете на сайте https://trendvi.ru
                            пользователи<br/>
                            предоставляют следующие сведения: E-mail Пароль Также администрация сайта<br/>
                            получает данные об IP-адресе посетителей, а также о типе браузера,
                            времени<br/>
                            нахождения на сайте и прочие подобные сведения. Сбор ведётся с помощью<br/>
                            сервисов статистики.<br/>

                            <br/>
                            <br/>
                            Использование информации Вся полученная информация используется<br/>
                            администрацией https://trendvi.ru исключительно в целях идентификации<br/>
                            клиента, а также для связи с клиентом.<br/>

                            <br/>
                            <br/>
                            Администрация сайта https://trendvi.ru в лице Индивидуального<br/>
                            предпринимателя Будилова Кирилла Евгеньевича, а также уполномоченных им
                            лиц,<br/>
                            имеет право направлять клиенту информационные сообщения (новостную<br/>
                            рассылку), если он подписался на них.<br/>

                            <br/>
                            <br/>
                            Защита персональных данных Администрация сайта https://trendvi.ru
                            обязуется<br/>
                            не разглашать сведения, полученные от пользователей. Все сведения хранятся
                            в<br/>
                            базе данных на защищенном сервере администрации сайта. Доступ к серверу<br/>
                            надёжно защищён паролем, который имеется только у администратора сайта.<br/>
                            <br/>
                            <br/>

                            Предоставление данных третьим лицам Полученные сведения не могут быть <br/>
                            переданы третьим лицам, за исключением следующих случаев: Для исполнения
                            <br/>
                            обязательств перед клиентом – только с его разрешения. В соответствии с
                            <br/>
                            обоснованными и применимыми требованиями закона. По всем вопросам,<br/>
                            пожеланиям и предложениям, вы можете обращаться к администрации сайта по<br/>
                            электронной почте
                            <a href="mailto:budilov02k@yandex.ru">budilov02k@yandex.ru</a>, либо по
                            форме обратной связи на<br/>
                            сайте <a href="https://trendvi.ru"> https://trendvi.ru</a>
                            <br/>
                            <br/>
                        </div>) : (
                        <div className="privacy pt-24">
                            <div className="second-title">Privacy Policy</div>
                            Last updated: July 05, 2024
                            <br/>
                            This Privacy Policy describes Our policies and procedures on the collection,
                            use and disclosure of Your information when You use the Service and tells
                            You about Your privacy rights and how the law protects You.

                            <br/>
                            We use Your Personal data to provide and improve the Service. By using the
                            Service, You agree to the collection and use of information in accordance
                            with this Privacy Policy.
                            <br/><br/>
                            <div className="second-title">Interpretation and Definitions</div>
                            Interpretation <br/>
                            The words of which the initial letter is capitalized have meanings defined
                            under the following conditions. The following definitions shall have the
                            same meaning regardless of whether they appear in singular or in plural.
                            <div className="third-title">Definitions</div>
                            For the purposes of this Privacy Policy:
                            <br/>
                            <b>Account</b> means a unique account created for You to access our Service
                            or parts of our Service. <br/>

                            <br/>
                            <b>Affiliate</b> means an entity that controls, is controlled by or is under
                            common control with a party, where "control" means ownership of 50% or more
                            of the shares, equity interest or other securities entitled to vote for
                            election of directors or other managing authority. <br/>
                            <b>Company</b> (referred to as either "the Company", "We", "Us" or "Our" in
                            this Agreement) refers to Sole Proprietor Budilov Kirill Evgenevich, Moscow,
                            Russia.

                            <br/>
                            <b>Cookies</b> are small files that are placed on Your computer, mobile
                            device or any other device by a website, containing the details of Your
                            browsing history on that website among its many uses. <b>Country </b> refers
                            to: Russia <br/>
                            <b>Device</b> means any device that can access the Service such as a
                            computer, a cellphone or a digital tablet. <b> Personal Data</b> is any
                            information that relates to an identified or identifiable individual.
                            <b>Service</b> refers to the Website. <b> Service Provider</b> means any
                            natural or legal person who processes the data on behalf of the Company. It
                            refers to third-party companies or individuals employed by the Company to
                            facilitate the Service, to provide the Service on behalf of the Company, to
                            perform services related to the Service or to assist the Company in
                            analyzing how the Service is used.
                            <br/>
                            <b>Usage Data</b> refers to data collected automatically, either generated
                            by the use of the Service or from the Service infrastructure itself (for
                            example, the duration of a page visit). <br/>
                            <b>Website </b> refers to Trendvi, accessible from https://trendvi.media
                            <br/>
                            <b>You</b> means the individual accessing or using the Service, or the
                            company, or other legal entity on behalf of which such individual is
                            accessing or using the Service, as applicable.

                            <div className="second-title">Collecting and Using Your Personal Data</div>
                            <div className="third-title">Types of Data Collected</div>
                            <b> Personal Data</b>
                            While using Our Service, We may ask You to provide Us with certain
                            personally identifiable information that can be used to contact or identify
                            You. Personally identifiable information may include, but is not limited to:
                            <br/>
                            Email address <br/>
                            Usage Data <br/>
                            <b> Usage Data</b> <br/>
                            Usage Data is collected automatically when using the Service. <br/>
                            <br/>
                            Usage Data may include information such as Your Device's Internet Protocol
                            address (e.g. IP address), browser type, browser version, the pages of our
                            Service that You visit, the time and date of Your visit, the time spent on
                            those pages, unique device identifiers and other diagnostic data. <br/>
                            When You access the Service by or through a mobile device, We may collect
                            certain information automatically, including, but not limited to, the type
                            of mobile device You use, Your mobile device unique ID, the IP address of
                            Your mobile device, Your mobile operating system, the type of mobile
                            Internet browser You use, unique device identifiers and other diagnostic
                            data. <br/>
                            We may also collect information that Your browser sends whenever You visit
                            our Service or when You access the Service by or through a mobile device.
                            <div className="third-title">Tracking Technologies and Cookies</div>
                            <br/>
                            We use Cookies and similar tracking technologies to track the activity on
                            Our Service and store certain information. Tracking technologies used are
                            beacons, tags, and scripts to collect and track information and to improve
                            and analyze Our Service. The technologies We use may include:
                            <br/><br/>
                            · <b> Cookies or Browser Cookies.</b> A cookie is a small file placed on
                            Your Device. You can instruct Your browser to refuse all Cookies or to
                            indicate when a Cookie is being sent. However, if You do not accept Cookies,
                            You may not be able to use some parts of our Service. Unless you have
                            adjusted Your browser setting so that it will refuse Cookies, our Service
                            may use Cookies. <br/>
                            · <b> Web Beacons. </b>Certain sections of our Service and our emails may
                            contain small electronic files known as web beacons (also referred to as
                            clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for
                            example, to count users who have visited those pages or opened an email and
                            for other related website statistics (for example, recording the popularity
                            of a certain section and verifying system and server integrity).

                            <br/>
                            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain
                            on Your personal computer or mobile device when You go offline, while
                            Session Cookies are deleted as soon as You close Your web browser. <br/>
                            We use both Session and Persistent Cookies for the purposes set out below:

                            <br/><br/>
                            Necessary / Essential Cookies
                            <br/>
                            Type: Session Cookies <br/>
                            Administered by: Us <br/>
                            Purpose: These Cookies are essential to provide You with services available
                            through the Website and to enable You to use some of its features. They help
                            to authenticate users and prevent fraudulent use of user accounts. Without
                            these Cookies, the services that You have asked for cannot be provided, and
                            We only use these Cookies to provide You with those services.
                            <br/><br/>
                            <b> Cookies Policy / Notice Acceptance Cookies</b>
                            Type: Persistent Cookies <br/>
                            Administered by: Us <br/>
                            Purpose: These Cookies identify if users have accepted the use of cookies on
                            the Website.
                            <br/>

                            <b> Functionality Cookies</b>
                            Type: Persistent Cookies <br/>
                            Administered by: Us <br/>
                            Purpose: These Cookies allow us to remember choices You make when You use
                            the Website, such as remembering your login details or language preference.
                            The purpose of these Cookies is to provide You with a more personal
                            experience and to avoid You having to re-enter your preferences every time
                            You use the Website.
                            <br/>
                            For more information about the cookies we use and your choices regarding
                            cookies, please visit our Cookies Policy or the Cookies section of our
                            Privacy Policy.

                            <br/>
                            <div className="second-title">Use of Your Personal Data</div>
                            The Company may use Personal Data for the following purposes: <br/>
                            <br/>
                            <b> To provide and maintain our Service</b>, including to monitor the usage
                            of our Service. <br/>
                            <b> To manage Your Account</b>: to manage Your registration as a user of the
                            Service. The Personal Data You provide can give You access to different
                            functionalities of the Service that are available to You as a registered
                            user. <br/>
                            <b> For the performance of a contract:</b> the development, compliance and
                            undertaking of the purchase contract for the products, items or services You
                            have purchased or of any other contract with Us through the Service. <br/>
                            <b> To contact You:</b> To contact You by email, telephone calls, SMS, or
                            other equivalent forms of electronic communication, such as a mobile
                            application's push notifications regarding updates or informative
                            communications related to the functionalities, products or contracted
                            services, including the security updates, when necessary or reasonable for
                            their implementation. <br/>
                            <b> To provide You</b> with news, special offers and general information
                            about other goods, services and events which we offer that are similar to
                            those that you have already purchased or enquired about unless You have
                            opted not to receive such information. <br/>
                            <b> To manage Your requests:</b> To attend and manage Your requests to Us.
                            <br/>
                            <b> For business transfers:</b> We may use Your information to evaluate or
                            conduct a merger, divestiture, restructuring, reorganization, dissolution,
                            or other sale or transfer of some or all of Our assets, whether as a going
                            concern or as part of bankruptcy, liquidation, or similar proceeding, in
                            which Personal Data held by Us about our Service users is among the assets
                            transferred. <br/>
                            <b> For other purposes:</b> We may use Your information for other purposes,
                            such as data analysis, identifying usage trends, determining the
                            effectiveness of our promotional campaigns and to evaluate and improve our
                            Service, products, services, marketing and your experience.

                            <br/><br/>
                            We may share Your personal information in the following situations:
                            <br/>
                            <br/>
                            · <b> With Service Providers:</b> We may share Your personal information
                            with Service Providers to monitor and analyze the use of our Service, to
                            contact You. <br/>
                            · <b> For business transfers:</b> We may share or transfer Your personal
                            information in connection with, or during negotiations of, any merger, sale
                            of Company assets, financing, or acquisition of all or a portion of Our
                            business to another company. <br/>
                            · <b> With Affiliates:</b> We may share Your information with Our
                            affiliates, in which case we will require those affiliates to honor this
                            Privacy Policy. Affiliates include Our parent company and any other
                            subsidiaries, joint venture partners or other companies that We control or
                            that are under common control with Us. <br/>
                            · <b> With business partners:</b> We may share Your information with Our
                            business partners to offer You certain products, services or promotions.
                            <br/>
                            · <b> With other users:</b> when You share personal information or otherwise
                            interact in the public areas with other users, such information may be
                            viewed by all users and may be publicly distributed outside. <br/>
                            · <b> With Your consent:</b> We may disclose Your personal information for
                            any other purpose with Your consent.
                            <div className="second-title">Retention of Your Personal Data</div>
                            The Company will retain Your Personal Data only for as long as is necessary
                            for the purposes set out in this Privacy Policy. We will retain and use Your
                            Personal Data to the extent necessary to comply with our legal obligations
                            (for example, if we are required to retain your data to comply with
                            applicable laws), resolve disputes, and enforce our legal agreements and
                            policies.
                            <br/>
                            The Company will also retain Usage Data for internal analysis purposes.
                            Usage Data is generally retained for a shorter period of time, except when
                            this data is used to strengthen the security or to improve the functionality
                            of Our Service, or We are legally obligated to retain this data for longer
                            time periods.
                            <div className="second-title">Transfer of Your Personal Data</div>
                            <br/>
                            Your information, including Personal Data, is processed at the Company's
                            operating offices and in any other places where the parties involved in the
                            processing are located. It means that this information may be transferred to
                            — and maintained on — computers located outside of Your state, province,
                            country or other governmental jurisdiction where the data protection laws
                            may differ than those from Your jurisdiction. <br/>
                            Your consent to this Privacy Policy followed by Your submission of such
                            information represents Your agreement to that transfer. <br/>
                            The Company will take all steps reasonably necessary to ensure that Your
                            data is treated securely and in accordance with this Privacy Policy and no
                            transfer of Your Personal Data will take place to an organization or a
                            country unless there are adequate controls in place including the security
                            of Your data and other personal information.
                            <div className="second-title">Delete Your Personal Data</div>
                            <br/>
                            You have the right to delete or request that We assist in deleting the
                            Personal Data that We have collected about You. <br/>
                            Our Service may give You the ability to delete certain information about You
                            from within the Service. <br/>
                            You may update, amend, or delete Your information at any time by signing in
                            to Your Account, if you have one, and visiting the account settings section
                            that allows you to manage Your personal information. You may also contact Us
                            to request access to, correct, or delete any personal information that You
                            have provided to Us. Please note, however, that We may need to retain
                            certain information when we have a legal obligation or lawful basis to do
                            so.
                            <div className="second-title">Disclosure of Your Personal Data</div>
                            <div className="third-title">Business Transactions</div>
                            <br/>
                            If the Company is involved in a merger, acquisition or asset sale, Your
                            Personal Data may be transferred. We will provide notice before Your
                            Personal Data is transferred and becomes subject to a different Privacy
                            Policy.
                            <br/>
                            <div className="third-title">Law enforcement</div>
                            <br/>
                            Under certain circumstances, the Company may be required to disclose Your
                            Personal Data if required to do so by law or in response to valid requests
                            by public authorities (e.g. a court or a government agency).
                            <div className="third-title">Other legal requirements</div>
                            <br/>
                            <br/>
                            The Company may disclose Your Personal Data in the good faith belief that
                            such action is necessary to:
                            <br/>
                            · Comply with a legal obligation <br/>
                            · Protect and defend the rights or property of the Company <br/>
                            · Prevent or investigate possible wrongdoing in connection with the Service
                            <br/>
                            · Protect the personal safety of Users of the Service or the public <br/>
                            · Protect against legal liability

                            <br/>
                            <div className="second-title">Security of Your Personal Data</div>
                            <br/>
                            The security of Your Personal Data is important to Us, but remember that no
                            method of transmission over the Internet, or method of electronic storage is
                            100% secure. While We strive to use commercially acceptable means to protect
                            Your Personal Data, We cannot guarantee its absolute security.

                            <br/>
                            <div className="second-title">Children's Privacy</div>
                            <br/>
                            Our Service does not address anyone under the age of 13. We do not knowingly
                            collect personally identifiable information from anyone under the age of 13.
                            If You are a parent or guardian and You are aware that Your child has
                            provided Us with Personal Data, please contact Us. If We become aware that
                            We have collected Personal Data from anyone under the age of 13 without
                            verification of parental consent, We take steps to remove that information
                            from Our servers.
                            <br/>
                            If We need to rely on consent as a legal basis for processing Your
                            information and Your country requires consent from a parent, We may require
                            Your parent's consent before We collect and use that information.
                            <div className="second-title">Links to Other Websites</div>
                            <br/>
                            Our Service may contain links to other websites that are not operated by Us.
                            If You click on a third party link, You will be directed to that third
                            party's site. We strongly advise You to review the Privacy Policy of every
                            site You visit.
                            <br/>
                            We have no control over and assume no responsibility for the content,
                            privacy policies or practices of any third party sites or services. <br/>
                            <div className="second-title">Changes to this Privacy Policy</div>
                            <br/>
                            <br/>
                            We may update Our Privacy Policy from time to time. We will notify You of
                            any changes by posting the new Privacy Policy on this page. <br/>
                            We will let You know via email and/or a prominent notice on Our Service,
                            prior to the change becoming effective and update the "Last updated" date at
                            the top of this Privacy Policy. <br/>
                            You are advised to review this Privacy Policy periodically for any changes.
                            Changes to this Privacy Policy are effective when they are posted on this
                            page.
                            <div className="second-title">Contact Us</div>
                            If you have any questions about this Privacy Policy, You can contact us:
                            <br/>
                            · By email: <a href="mailto:fabricbotai@gmail.com">fabricbotai@gmail.com</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
