import { PageContainer } from "../components/shared/PageContainer";
import { Card } from "../components";

export function NotFoundPage() {
  return (
    <PageContainer>
      <Card>
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-6">Die Seite konnte nicht gefunden werden.</p>
          <a href="/" className="text-blue-500 hover:underline">
            Zur Startseite
          </a>
        </div>
      </Card>
    </PageContainer>
  );
}
