import './Project.css'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
const Project = () => {
    const test = [1, 2, 3, 4, 5, 6, 7]
    return (
        <Grid2 
        className = "grid"
        marginTop="11rem"
        container
        // rowGap="0.3rem"
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {test.map((it, index) => (
                <Grid2 className="h" display="flex" justifyContent="center" xs={12} sm={12} md={6} key={index}>
                    <div className='box'>{it}</div>
                </Grid2>
            ))}
            
        </Grid2>

    );
}

export default Project;