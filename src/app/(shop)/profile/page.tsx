import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    // redirect('/auth/login?returnTo=/perfil');
    redirect("/");
  }

  return (
    <div>
      <Title title="Mi Perfil" />

      {/* <pre>{JSON.stringify(session.user, null, 2)}</pre> */}

      <h2>
        <span className="font-bold">Nombre: </span> {session.user.name}
      </h2>
      <h3>
        <span className="font-bold">Email: </span>
        {session.user.email}
      </h3>
    </div>
  );
}
