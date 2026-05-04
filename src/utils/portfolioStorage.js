const PROJECT_FILTER_KEY = "portfolio_project_filter_v1";

const VALID_PROJECT_FILTERS = new Set(["all", "web app", "mobile", "ai"]);
const CONTACT_DRAFT_KEY = "portfolio_contact_draft_v1";

export const getStoredProjectFilter = () => {
  try {
    const v = localStorage.getItem(PROJECT_FILTER_KEY);
    if (v && typeof v === "string" && VALID_PROJECT_FILTERS.has(v)) return v;
    return "all";
  } catch {
    return "all";
  }
};

export const setStoredProjectFilter = (value) => {
  if (!VALID_PROJECT_FILTERS.has(value)) return;
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
