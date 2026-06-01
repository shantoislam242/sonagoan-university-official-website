import AdmissionForm from '@/components/forms/AdmissionForm';

export default function AdmissionFormPreview() {
  return (
    <main style={{ padding: '4rem 2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1>Admission Form (preview)</h1>
      <AdmissionForm />
    </main>
  );
}
