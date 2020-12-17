import React, {useState} from 'react';
import TransferList from '../Module/TestMaterialUI/TransferList';
import DialogComp from '../Module/TestMaterialUI/DialogComp';
import ToolTipComp from '../Module/TestMaterialUI/ToolTipComp';
import Pagination from '@material-ui/lab/Pagination';
import AutoCompleteComp from '../Module/TestMaterialUI/AutoCompleteComp';
import Slider from '../Module/Slider/Slider';

const TrangTestMaterialUI = () => {

    const [mang_data, SetMangData] = useState([
        [
            "Hung Nguyen",
            "Dang Pham",
            "Thu Huynh",
            "Luan Tran",
            "Phu Nguyen"
        ],
        [
            "Tai Mach",
            "Son Nguyen",
            "Loc Phung",
            "Luan Nguyen",
            "Xuan Nguyen"
        ],
        [
            "Dat Nguy",
            "Vy Le",
            "Khoa Tran",
            "Sieu Ba Vong",
            "Tung Nguyen"
        ],
    ])

    const [cur_page, setCurPage] = useState(0);

    const handleChangePage = (event, value) => {
        console.log(value);
        setCurPage(value - 1);
    }

    return (
        <div>
            <Slider />

            <TransferList />
            {/* <CircularProgress /> */}

            <DialogComp /> 

            <ToolTipComp />

            {
                mang_data[cur_page].map(hoten => 
                    <div>{hoten}</div>    
                )
            }

            <Pagination count={mang_data.length} color="secondary" onChange={handleChangePage} />

            <AutoCompleteComp />
            
            
        </div>
    );
};

export default TrangTestMaterialUI;