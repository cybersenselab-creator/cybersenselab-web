import { useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import { ErrorState, LoadingState } from "../ui/UIStates";

const SITE_TITLE = "SARGEM CyberSense Laboratuvarı | SAÜ Bilgisayar Mühendisliği";

type Props<T extends { title: string }> = {
  query: { data: T | null | undefined; isLoading: boolean; error: unknown };
  backTo: string;
  texts: { loading: string; loadError: string; back: string; notFoundDescription: string };
  render: (project: T) => ReactNode;
};

/** Loading / error / not-found states shared by both project detail routes; sets the tab title. */
export default function ProjectDetailPage<T extends { title: string }>({ query, backTo, texts, render }: Props<T>) {
  const { data: project, isLoading, error } = query;

  useEffect(() => {
    if (project) document.title = `${project.title} | CyberSense Lab`;
    return () => {
      document.title = SITE_TITLE;
    };
  }, [project]);

  if (isLoading) return <LoadingState text={texts.loading} />;
  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <ErrorState message={texts.loadError} />
        <Link to={backTo} className="btn-cyber">
          {texts.back}
        </Link>
      </div>
    );
  }
  if (project) return <>{render(project)}</>;
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <i className="fa fa-folder-open text-5xl text-gray-200" aria-hidden="true" />
      <h1 className="mt-5 text-2xl font-bold text-navy">Proje bulunamadı</h1>
      <p className="mt-2 text-gray-500">{texts.notFoundDescription}</p>
      <Link to={backTo} className="btn-cyber mt-6">
        {texts.back}
      </Link>
    </div>
  );
}
