
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../redux/actions/SideBarAction";
const SideBar = () => {
    const {isSideBarOpen} =useSelector((state) => state.sideBarCheck);
    const dispatch = useDispatch();
   console.log(isSideBarOpen)
    return (
        <section className={`${isSideBarOpen?'sidebar show-side-bar bg-white pt-3 d-block d-md-none d-lg-none' : 'sidebar  bg-white pt-3 d-block d-md-none d-lg-none'}`}>
            <div className="conainer">
                <div className="row pl-3">
                    <div className="col-12 border-bottom pt-2 pb-2 d-flex justify-content-between">
                        pablo mart
                        <button className="btn btn-white" onClick={() =>
                        {
                            console.log('close me');
                        return  dispatch(closeSidebar())
                        }
                        }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd7e14" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        </button>
                    </div>
                    <div className="col-12 border-bottom pt-2 pb-2">
                        live Help
                    </div>
                </div>
                {/* colum for account starts here */}
                <div className=" row shadow pl-3">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="col-9 text-success pt-2 pb-2">My Pablo Account</div>
                        <div className="col-3 pt-2 pb-2">more</div>
                    </div>
                    <div className="col-12 pt-2 pb-2">orders</div>
                    <div className="col-12 pt-2 pb-2">pending orders</div>
                    <div className="col-12 pt-2 pb-2">pablo cupons</div>
                    <div className="col-12 pt-2 pb-2">saved items</div>
                </div>
                {/* colum for category starts here */}
                <div className=" row shadow pl-3">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="col-9 text-success pt-2 pb-2">our Categories</div>
                        <div className="col-3 pt-2 pb-2">all</div>
                    </div>
                    <div className="col-12 pt-2 pb-2">supermarket</div>
                    <div className="col-12 pt-2 pb-2">Health beauty</div>
                    <div className="col-12 pt-2 pb-2">Home Offices</div>
                    <div className="col-12 pt-2 pb-2">phone tablet</div>
                </div>
                {/* colum for category starts here */}
                <div className=" row shadow pl-3">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="col-9 text-success pt-2 pb-2">our Services</div>
                        <div className="col-3 pt-2 pb-2">all</div>
                    </div>
                    <div className="col-12 pt-2 pb-2">pay airtime bills</div>
                    <div className="col-12 pt-2 pb-2">pay electricity bills</div>
                    <div className="col-12 pt-2 pb-2">pay internet bills</div>
                    <div className="col-12 pt-2 pb-2">buy data</div>
                </div>
            </div>

        </section>
    )
}

export default SideBar
