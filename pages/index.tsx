import WelcomePage from "@/components/welcome/WelcomePage";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useSession } from "next-auth/react";
import Income from "../containers/income";
import Investment from "../containers/investment";
import Expense from "../containers/expense";
import { setCurrentPage } from "@/lib/features/pageSlice";
import Loader from "./loader";
import { useEffect } from "react";
import userInitializeFromDb from "@/utils/helper/userInitializeFromDb";
import { setInitialSessionFetchDone } from "@/lib/features/commonSlice";

export default function Home() {
  const { data: session, status } = useSession();
  const currentPage = useAppSelector((state) => state.page);
  const showProgress = useAppSelector((state) => state.common.showSpinner);
  const isInitialSessionFetchDone = useAppSelector(
    (state) => state.common.initialSessionFetchDone
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session && !isInitialSessionFetchDone) {
      userInitializeFromDb(session, dispatch);
      dispatch(setInitialSessionFetchDone(true));
    }
  }, [session]);

  if (status === "loading" || showProgress) {
    return (
      <div className="h-content flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (session && currentPage === "init") {
    dispatch(setCurrentPage("expense"));
  }

  switch (currentPage) {
    case "income":
      return <Income />;
    case "investment":
      return <Investment />;
    case "expense":
      return <Expense />;
    default:
      return (
        <div className="h-content flex justify-center items-center">
          <WelcomePage />
        </div>
      );
  }
}
