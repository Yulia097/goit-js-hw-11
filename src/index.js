import Notiflix from 'notiflix';
import axios from 'axios';
axios.get('/users').then(res => {
  console.log(res.data);
});

// key(required)	str	Your API key: 36004956 - 6b992bd1e84f6d104fad7b40b;
