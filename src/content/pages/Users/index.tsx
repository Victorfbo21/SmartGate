
import { useState } from 'react';
import AddUser from './AddUser';
import Users from './Users';


const UserContainer = () => {
    const [acao, setAcao] = useState({ acao: 0, editPassword: false, refresh: false, id: null });

    if (acao.acao == 1)
        return (<AddUser editPassword={acao.editPassword} setAcao={setAcao} userId={acao.id} refresh={acao.refresh} />);
    if (acao.acao == 2)
        return (<AddUser editPassword={acao.editPassword} setAcao={setAcao} userId={acao.id} refresh={!acao.refresh} />);
    return (<Users setAcao={setAcao} refresh={acao.refresh} />);
}

export default UserContainer;