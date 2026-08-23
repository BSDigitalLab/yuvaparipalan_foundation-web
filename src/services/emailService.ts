/**
 * Email Service helper for dispatching form submission data to server
 * Triggers automated confirmation email to applicant & intimation email to admin
 */

export interface FormSubmissionPayload {
  formType: 'contact' | 'volunteer' | 'partner';
  formData: Record<string, any>;
}

export async function sendSubmissionEmail(payload: FormSubmissionPayload): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.warn('API Email endpoint response error:', errData);
      return { success: false, message: errData.error || 'Server error sending email' };
    }

    const data = await response.json();
    return { success: true, message: data.message };
  } catch (error: any) {
    console.error('Failed to send submission email via API:', error);
    // Fallback: Return success so user UX is not blocked if dev server proxy is offline
    return { success: false, message: error?.message || 'Network error' };
  }
}
