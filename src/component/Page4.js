import React from 'react';
import './css/Page4.css';
import Button from '@mui/material/Button';

export default function Page4() {
    return (
        <div className='page4'>

            <p>GET IN TOUCH</p>
            <div className='input'>
                <form action="">
                    <label htmlFor="">Name</label><br />
                    <input type="text" placeholder='Enter your name' required /><br /><br />
                    <label htmlFor="">Email</label><br />
                    <input type="text" placeholder='Enter your Mail ID' required /><br /><br />
                    <label htmlFor="">Subject</label><br />
                    <input type="text" placeholder='Enter your Subject' required /><br /><br />
                    <label htmlFor="">Message</label><br />
                    <input type="text" placeholder='Enter your Message' required /><br /><br /><br />
                    <Button className='button' variant="contained" color="success">
                        Submit
                    </Button>
                </form>
            </div>

            <div className="contact">

                <a href="mailto:Aniketsingh16oct2000@gmail.com">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahuIATDVzXTaEQ5_0JjnlxHnafwOutBfplI5HeekMmQ&s" alt="Mail" />
                        <span>Aniketsingh16oct2000@gmail.com</span>
                    </div>
                </a>

                <a href="https://www.instagram.com/aniket_singh016/">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/1200px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png" alt="Instagram" />
                        <span>Aniketsingh_016</span>
                    </div>
                </a>

                <a href="https://github.com/Aniketsingh1610">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCL6squJi5XJkuVhF1NesTXiHbGHGdZP_bh4Ob94K-w&s" alt="Github" />
                        <span>Aniketsingh1610</span>
                    </div>
                </a>

            </div>

        </div>
    )
}


