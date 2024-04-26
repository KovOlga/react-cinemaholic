import RandomTitle from "../../components/random-title";
import TitleInfo from "../../components/title-info";
import TitleList from "../../components/title-list";
import style from "./style.module.css";

const MainPage = () => {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   // dispatch(getTopFilmsThunk());
  // }, []);
  return (
    <div className={style.main}>
      <RandomTitle />
      <div className={style.content}>
        <TitleList />
        <TitleInfo />
      </div>
    </div>
  );
};

export default MainPage;
