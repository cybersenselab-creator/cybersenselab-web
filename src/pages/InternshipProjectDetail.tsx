import { useParams } from "react-router";
import { useInternshipProject } from "../lib/internshipProjects";
import ProjectDetailPage from "../components/projects/ProjectDetailPage";
import { InternshipProjectView } from "../components/projects/ProjectDetailView";

export default function InternshipProjectDetail() {
  const { slug } = useParams();
  return (
    <ProjectDetailPage
      query={useInternshipProject(slug)}
      backTo="/projeler?tur=staj"
      texts={{
        loading: "Staj projesi yükleniyor...",
        loadError: "Staj projesi yüklenirken hata oluştu.",
        back: "Staj projelerine dön",
        notFoundDescription: "Bu staj projesi kaldırılmış veya yayından alınmış olabilir.",
      }}
      render={(project) => <InternshipProjectView project={project} />}
    />
  );
}
