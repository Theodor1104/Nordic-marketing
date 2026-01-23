// Supabase database service
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vzvyyleyafnhfacmwirs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6dnl5bGV5YWZuaGZhY213aXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzOTI5NjYsImV4cCI6MjA4Mzk2ODk2Nn0.ALB_qGhJInktcTRzjt_T6KT6l8WGSSjHJr1-TaHnkRA';

const supabase = createClient(supabaseUrl, supabaseKey);

// Hent alle beskeder
export const getMessages = async () => {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;

    // Konverter is_lead til isLead for kompatibilitet
    return (data || []).map(msg => ({
      ...msg,
      isLead: msg.is_lead
    }));
  } catch (error) {
    console.error('Error loading messages:', error);
    return [];
  }
};

// Gem en ny besked
export const saveMessage = async (message) => {
  try {
    const newMessage = {
      id: Date.now().toString(),
      name: message.name,
      email: message.email,
      company: message.company || null,
      phone: message.phone || null,
      service: message.service || null,
      message: message.message,
      date: new Date().toISOString(),
      read: false,
      is_lead: false
    };

    const { data, error } = await supabase
      .from('messages')
      .insert([newMessage])
      .select()
      .single();

    if (error) throw error;

    return { ...data, isLead: data.is_lead };
  } catch (error) {
    console.error('Error saving message:', error);
    return null;
  }
};

// Opdater en besked
export const updateMessage = async (id, updates) => {
  try {
    // Konverter isLead til is_lead for databasen
    const dbUpdates = { ...updates };
    if ('isLead' in dbUpdates) {
      dbUpdates.is_lead = dbUpdates.isLead;
      delete dbUpdates.isLead;
    }

    const { data, error } = await supabase
      .from('messages')
      .update(dbUpdates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return { ...data, isLead: data.is_lead };
  } catch (error) {
    console.error('Error updating message:', error);
    return null;
  }
};

// Slet en besked
export const deleteMessageFromDB = async (id) => {
  try {
    const { error } = await supabase
      .from('messages')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return true;
  } catch (error) {
    console.error('Error deleting message:', error);
    return false;
  }
};

// Slet alle beskeder
export const clearAllMessages = async () => {
  try {
    const { error } = await supabase
      .from('messages')
      .delete()
      .neq('id', '');

    if (error) throw error;

    return true;
  } catch (error) {
    console.error('Error clearing messages:', error);
    return false;
  }
};

// Eksporter beskeder som JSON
export const exportMessages = async () => {
  return await getMessages();
};
