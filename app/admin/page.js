import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
    const { data: leads, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        return (
            <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
                <h1>Erro ao carregar leads</h1>
                <p>{error.message}</p>
                <p style={{ marginTop: '1rem', fontSize: '14px', color: '#666' }}>
                    * Certifique-se de que a tabela &quot;leads&quot; existe no seu projeto Supabase, com as colunas: id, created_at, nome, contato, negocio, necessidade.
                </p>
            </div>
        )
    }

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#111111', minHeight: '100vh', width: '100%', padding: '2rem', fontFamily: 'sans-serif' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1.5rem', fontSize: '24px', fontWeight: 'bold' }}>Leads Captados ({leads?.length || 0})</h1>
                <div style={{ overflowX: 'auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #e1e1e1', backgroundColor: '#f3f4f6' }}>
                                <th style={{ padding: '1.2rem 1rem', minWidth: '150px', color: '#374151', fontSize: '0.9rem', textTransform: 'uppercase' }}>Data</th>
                                <th style={{ padding: '1.2rem 1rem', color: '#374151', fontSize: '0.9rem', textTransform: 'uppercase' }}>Nome</th>
                                <th style={{ padding: '1.2rem 1rem', color: '#374151', fontSize: '0.9rem', textTransform: 'uppercase' }}>Contato</th>
                                <th style={{ padding: '1.2rem 1rem', color: '#374151', fontSize: '0.9rem', textTransform: 'uppercase' }}>Negócio</th>
                                <th style={{ padding: '1.2rem 1rem', color: '#374151', fontSize: '0.9rem', textTransform: 'uppercase' }}>Necessidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads?.map((lead) => (
                                <tr key={lead.id} style={{ borderBottom: '1px solid #e5e7eb', transition: 'background-color 0.2s' }}>
                                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>
                                        {lead.created_at ? new Date(lead.created_at).toLocaleString('pt-BR') : 'Sem data'}
                                    </td>
                                    <td style={{ padding: '1rem', fontWeight: '600', color: '#111827' }}>{lead.nome}</td>
                                    <td style={{ padding: '1rem', color: '#4b5563' }}>{lead.contato}</td>
                                    <td style={{ padding: '1rem', color: '#4b5563' }}>{lead.negocio}</td>
                                    <td style={{ padding: '1rem', color: '#4b5563' }}>{lead.necessidade || '-'}</td>
                                </tr>
                            ))}
                            {(!leads || leads.length === 0) && (
                                <tr>
                                    <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: '#9ca3af' }}>
                                        Nenhum lead captado ainda.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
