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
                    * Certifique-se de que a tabela "leads" existe no seu projeto Supabase, com as colunas: id, created_at, nome, contato, negocio, necessidade.
                </p>
            </div>
        )
    }

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', color: '#111' }}>
            <h1 style={{ marginBottom: '1.5rem', fontSize: '24px' }}>Leads Captados ({leads?.length || 0})</h1>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #333', backgroundColor: '#f9f9f9' }}>
                            <th style={{ padding: '1rem', minWidth: '150px' }}>Data</th>
                            <th style={{ padding: '1rem' }}>Nome</th>
                            <th style={{ padding: '1rem' }}>Contato</th>
                            <th style={{ padding: '1rem' }}>Negócio</th>
                            <th style={{ padding: '1rem' }}>Necessidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads?.map((lead) => (
                            <tr key={lead.id} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '1rem' }}>
                                    {lead.created_at ? new Date(lead.created_at).toLocaleString('pt-BR') : 'Sem data'}
                                </td>
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>{lead.nome}</td>
                                <td style={{ padding: '1rem' }}>{lead.contato}</td>
                                <td style={{ padding: '1rem' }}>{lead.negocio}</td>
                                <td style={{ padding: '1rem' }}>{lead.necessidade || '-'}</td>
                            </tr>
                        ))}
                        {(!leads || leads.length === 0) && (
                            <tr>
                                <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                                    Nenhum lead captado ainda.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
