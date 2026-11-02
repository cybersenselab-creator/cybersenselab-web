import { useParams } from "react-router";
import { useProject } from "../hooks/useContent";
import ProjectDetailPage from "../components/projects/ProjectDetailPage";
import { ResearchProjectView } from "../components/projects/ProjectDetailView";

export default function ResearchProjectDetail() {
  const { id } = useParams();
  return (
    <ProjectDetailPage
      query={useProject(id)}
      backTo="/projeler?tur=arastirma"
      texts={{
        loading: "Araştırma projesi yükleniyor...",
        loadError: "Araştırma projesi yüklenirken hata oluştu.",
        back: "Projelere dön",
        notFoundDescription: "Bu araştırma projesi kaldırılmış veya yayından alınmış olabilir.",
      }}
      render={(project) => <ResearchProjectView project={project} />}
    />
  );
}
