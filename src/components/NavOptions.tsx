import ProfilePic from "../assets/profile_pic.png"
import DownArrow from "../assets/navbar-bold-chevron-down.png"
import CredIcon from "../assets/navbar-creds.png"

// Navbar Icons
import home from "../assets/navbar-home.png"
import orders from "../assets/navbar-orders.png"
import products from "../assets/navbar-products.png"
import delivery from "../assets/navbar-delivery.png"
import marketing from "../assets/navbar-marketing.png"
import analytics from "../assets/navbar-analytics.png"
import payments from "../assets/navbar-payments.png"
import tools from "../assets/navbar-tools.png"
import discounts from "../assets/navbar-discounts.png"
import audience from "../assets/navbar-audience.png"
import appearance from "../assets/navbar-appearance.png"
import plugins from "../assets/navbar-plugins.png"


const NavOptions = () => {
  return (
    <>
      <nav className="w-[92.5rem] h-full bg-[#1E2640] text-white px-2.5 py-4" >

        <div className="h-10 w-48 flex">
          <div className="w-10 h-10 rounded" >
            <img src={ProfilePic} alt="Profile Pic" />
          </div>
          <div className="w-3 bg-transparent h-full" />

          <div className="w-28">
            <p className="font-medium text-base">Nishyan</p>
            <p className="font-normal text-sm opacity-80 underline">
              Visit Store
            </p>
          </div>
          <div className="h-full w-3 bg-transparent" />
          <div className="h-full flex items-center">
            <div className="w-5 h-5">
              <img src={DownArrow} alt="navbar-down" />
            </div>
          </div>
        </div>
        <div className="h-6 w-full bg-transparent" />

        <div className="w-full h-[82.1rem]">
          {LeftMenuOptions.map((item) => {
            return (
              <>
                <div
                  key={item.name}
                  className={`
                  w-52 rounded flex py-2 px-4 h-9 
                  ${item.name === "Payments" ? "bg-[#FFFFFF1A]" : "bg-transparent"}
                  `}
                >
                  <div className="w-5 h-5 opacity-80">
                    <img src={item.icon} alt={item.icon} />
                  </div>
                  <div className="h-full w-3" />
                  <div className="h-5 opacity-80 w-fit font-medium text-sm">
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="h-4 w-full" />

        <div className="h-14 w-full py-1.5 px-3 rounded flex bg-[#353C53]" >
          <div className="flex items-center h-full">
            <div className="w-6 p-1.5 h-6 rounded bg-[#FFFFFF1A]">
              <img src={CredIcon} alt="" />
            </div>
          </div>
          <div className="h-full w-3" />
          <div>
            <p className="text-sm font-normal" >
              Available Credits
            </p>
            <p className="text-base font-medium" >
              222.10
            </p>
          </div>
        </div>

      </nav>
    </>
  );
};


export default NavOptions;

const LeftMenuOptions = [
  { "icon": home, "name": "Home" },
  { "icon": orders, "name": "Orders" },
  { "icon": products, "name": "Products" },
  { "icon": delivery, "name": "Delivery" },
  { "icon": marketing, "name": "Marketing" },
  { "icon": analytics, "name": "Analytics" },
  { "icon": payments, "name": "Payments" },
  { "icon": tools, "name": "Tools" },
  { "icon": discounts, "name": "Discounts" },
  { "icon": audience, "name": "Audience" },
  { "icon": appearance, "name": "Appearance" },
  { "icon": plugins, "name": "Plugins" }
]