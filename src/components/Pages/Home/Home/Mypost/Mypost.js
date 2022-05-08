import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../../../Api/axiosPrivate';
import auth from '../../../../../firebase.init';

const Mypost = () => {
    const [posts, setPosts] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        const email = user.email
        const url = `http://localhost:5000/userpost?email=${email}`
        const getItem = async () => {
            try {
                const { data } = await axiosPrivate.get(url)
                setPosts(data)
            } catch (error) {
                if (error.status.response === 401 || error.status.response === 403) {
                    signOut(auth)
                    navigate('/login')
                }

            }
        }

        getItem()
    }, [user])
    return (
        <div>
            {
                posts.map(post => console.log(post))
            }
        </div>
    );
};

export default Mypost;