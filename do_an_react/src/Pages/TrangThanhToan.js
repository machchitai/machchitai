import React, { Component } from 'react';
import Slider from '../Module/Slider/Slider';
import FormThanhToan from '../Module/FormThanhToan';
import FormReviewGioHang from '../Module/FormReviewGioHang';
import { Grid } from '@material-ui/core';

class TrangThanhToan extends Component {
    render() {
        return (
            <div>
                <Slider />

                <div className="container include_table_gio_hang">
                    
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <FormThanhToan />
                        </Grid>

                        <Grid item xs={6}>
                            <FormReviewGioHang />
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }
}

export default TrangThanhToan;