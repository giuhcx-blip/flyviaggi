import { NextResponse } from 'next/server';
import { getSupabaseCredentials } from '@/storage/database/supabase-client';

export async function GET() {
  try {
    const { url, anonKey } = getSupabaseCredentials();

    if (!url || !anonKey) {
      return NextResponse.json(
        { error: 'Supabase 服务未开通，请在 Coze 平台开通 Supabase 服务' },
        { status: 500 }
      );
    }

    return NextResponse.json({ url, anonKey });
  } catch (error) {
    console.error('Failed to get Supabase config:', error);
    return NextResponse.json(
      { error: 'Supabase 服务未开通，请在 Coze 平台开通 Supabase 服务' },
      { status: 500 }
    );
  }
}