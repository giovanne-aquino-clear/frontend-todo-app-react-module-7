import React from "react";
import Grid from "../template/grid,";
import IconButton from "../template/iconButton";

export default props =>(
    <div role= 'form' className='todoForm'>
        <Grid col='12 9 10'>
            <input id='description' className="form-control"
                placeholder="Adicione uma terefa"
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>
        
        <Grid cols ='12 3 2'>
            <IconButton style='primary' icon= 'plus'
            onClick={props.handleAdd}></IconButton>
            <IconButton style="info" icon="search"
                        onClick={props.handleSearch} />
            <IconButton style="default" icon="close"
                        onClick={props.handleClear} />
        </Grid>
    </div>

)