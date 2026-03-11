import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request) {
    try {
        const body = await request.json()
        const { name, contact, businessType, need } = body

        if (!name || !contact || !businessType) {
            return NextResponse.json(
                { error: 'Nome, contato e tipo de negócio são obrigatórios.' },
                { status: 400 }
            )
        }

        const { data, error } = await supabase
            .from('leads')
            .insert([
                {
                    nome: name,
                    contato: contact,
                    negocio: businessType,
                    necessidade: need || ''
                }
            ])
            .select()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Erro ao salvar o contato no banco de dados.' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { success: true, lead: data[0] },
            { status: 201 }
        )
    } catch (err) {
        console.error('API /leads error:', err)
        return NextResponse.json(
            { error: 'Erro interno no servidor.' },
            { status: 500 }
        )
    }
}
