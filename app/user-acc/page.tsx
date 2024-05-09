import Navigation from "@/components/nav";
import './user_acc_style.css'
import UserForm from "./form";
import { demo } from "@/utils/demo";

export default async function UserAccountPage() {

    const user = demo.user[1]
    console.log(user);

    return (
        <div className=''>
            <Navigation />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

            {/* cover photo */}
            <div className="cover">
                <div className="reveal"></div>
            </div>

            <section className="acc">

                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${"Jhon Doe"}`} className='profile-pic' />

                <p className="name">{user.firstName} {user.lastName}</p>

                <div className="contact-info">
                    <p className="bx bx-phone"></p>
                    <p className="ph-no">{user.phoneNumber}</p>
                    <p className='bx bxl-gmail' ></p>
                    <p className="email">{user.email}</p>
                </div>

                <div className="tabs">
                    <input type="radio" name="tab" id="tab1" defaultChecked />
                    <label htmlFor="tab1" className="tab-title">Account Information</label>

                    <input type="radio" name="tab" id="tab2" />
                    <label htmlFor="tab2" className="tab-title">My Listings</label>

                    <input type="radio" name="tab" id="tab3" />
                    <label htmlFor="tab3" className="tab-title">Short Listed</label>

                    <div className="line"></div>

                    <div className="tab-content">
                        <div className="tab-panel" id="tab1-panel">
                            {/* Content for My Listings tab */}
                            <div>
                                {/* My Listings Content */}
                                <UserForm firstName={user.firstName} lastName={user.lastName} email={user.email} phoneNumber={user.phoneNumber} agency={user.agency} license={user.license} ceaNumber={user.ceaNumber}
                                    country={user.country} />
                            </div>
                        </div>

                        <div className="tab-panel" id="tab2-panel">
                            {/* Content for Short Lists */}
                            <div>
                                {/* Short Listed Content */}
                                <p>My Listed Content</p>
                            </div>
                        </div>

                        <div className="tab-panel" id="tab3-panel">
                            {/* Content for Short Lists */}
                            <div>
                                {/* Short Listed Content */}
                                <p>Short Listed Content</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}