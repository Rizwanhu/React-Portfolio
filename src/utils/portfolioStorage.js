const PROJECT_FILTER_KEY = "portfolio_project_filter_v1";
const CONTACT_DRAFT_KEY = "portfolio_contact_draft_v1";

export const getStoredProjectFilter = () => {
  try {
    const v = localStorage.getItem(PROJECT_FILTER_KEY);
    return v && typeof v === "string" ? v : "all";
  } catch {
    return "all";
  }
};

export const setStoredProjectFilter = (value) => {
  try {
    localStorage.setItem(PROJECT_FILTER_KEY, value);
  } catch {
    /* ignore quota / private mode */
  }
};

export const getContactDraft = () => {
  try {
    const raw = localStorage.getItem(CONTACT_DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const setContactDraft = (draft) => {
  try {
    localStorage.setItem(CONTACT_DRAFT_KEY, JSON.stringify(draft));
  } catch {
    /* ignore */
  }
};

export const clearContactDraft = () => {
  try {
    localStorage.removeItem(CONTACT_DRAFT_KEY);
  } catch {
    /* ignore */
  }
};
