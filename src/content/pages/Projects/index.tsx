
import { useState } from 'react';
import AddProject from './AddProject';
import Projects from './Projects';


const ProjectContainer = () => {
    const [acao, setAcao] = useState({ acao: 0, charts: false, equipments: false, edit: false, refresh: false, id: null });

    if (acao.acao == 1)
        return (<AddProject charts={acao.charts} setAcao={setAcao} projectId={acao.id} refresh={acao.refresh} equipments={undefined} edit={undefined} />);
    if (acao.acao == 2)
        return (<AddProject equipments={acao.equipments} setAcao={setAcao} projectId={acao.id} refresh={!acao.refresh} charts={undefined} edit={undefined} />);
    if (acao.acao == 3)
        return (<AddProject edit={acao.edit} setAcao={setAcao} projectId={acao.id} refresh={!acao.refresh} equipments={undefined} charts={undefined} />);
    return (<Projects setAcao={setAcao} refresh={acao.refresh} />);
}

export default ProjectContainer;