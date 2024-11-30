// j'ai installer axios dans terminale apres  :
import axios from 'axios';
export const fetchLivres = () => {
    return axios
        .get('https://gahi-said.com/apis/auteurs.php').then((response) => response.data);  
};
