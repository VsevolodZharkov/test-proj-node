import Appear from 'components/common/Appear';
import UserMaterials from 'components/UserMaterials';
import s from './UserMaterialsPage.module.css';

const UserMaterialsPage = () => {
  return (
    <Appear time={600}>
      <div className={s.container}>
        <UserMaterials />
    </div>
     </Appear>
  );
};

export default UserMaterialsPage;
