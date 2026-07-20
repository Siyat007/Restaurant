import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Trash2, Lock, RefreshCw, ImageOff } from 'lucide-react';

export default function AdminMemories() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [authed, setAuthed] = useState(false);
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('pending');

  const csrfHeaders = (headers = {}) => ({ ...headers, 'X-CSRF-TOKEN': csrfToken });

  const loadMemories = () => {
    setLoading(true);
    setError(null);
    fetch('/api/admin/memories', {
      credentials: 'same-origin',
    })
      .then(async (res) => {
        if (res.status === 401 || res.status === 403) throw new Error('Your session has expired. Please sign in again.');
        if (!res.ok) throw new Error('Could not reach the server.');
        return res.json();
      })
      .then((data) => {
        setMemories(data);
        setAuthed(true);
      })
      .catch((err) => {
        setError(err.message);
        setAuthed(false);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetch('/api/admin/csrf-token', { credentials: 'same-origin' })
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.token))
      .then(() => fetch('/api/admin/me', { credentials: 'same-origin' }))
      .then((res) => {
        if (!res.ok) throw new Error('Not signed in');
        setAuthed(true);
        loadMemories();
      })
      .catch(() => setAuthed(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    fetch('/api/admin/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: csrfHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ email, password }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error((await res.json()).message || 'Sign-in failed.');
        return res.json();
      })
      .then(() => {
        setPassword('');
        setAuthed(true);
        loadMemories();
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const updateStatus = (id, status) => {
    fetch(`/api/admin/memories/${id}`, {
      method: 'PATCH',
      credentials: 'same-origin',
      headers: csrfHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ status }),
    })
      .then((res) => { if (!res.ok) throw new Error('Update failed'); return res.json(); })
      .then(() => loadMemories())
      .catch(() => setError('Failed to update. Please try again.'));
  };

  const deleteMemory = (id) => {
    if (!window.confirm('Permanently delete this memory? This cannot be undone.')) return;
    fetch(`/api/admin/memories/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: csrfHeaders(),
    })
      .then((res) => { if (!res.ok) throw new Error('Delete failed'); return res.json(); })
      .then(() => loadMemories())
      .catch(() => setError('Failed to delete. Please try again.'));
  };

  const logout = () => {
    fetch('/api/admin/logout', { method: 'POST', credentials: 'same-origin', headers: csrfHeaders() })
      .finally(() => {
        setAuthed(false);
        setMemories([]);
      });
  };

  const filteredMemories = filter === 'all' ? memories : memories.filter((m) => m.status === filter);

  if (!authed) {
    return (
      <div className="admin-login-container">
        <form className="admin-login-card" onSubmit={handleLogin}>
          <Lock size={28} />
          <h2>Memories Moderation</h2>
          <p>Sign in to review submissions.</p>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>{loading ? 'Checking...' : 'Enter'}</button>
          {error && <p className="admin-error">{error}</p>}
        </form>
        <style>{adminStyles}</style>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <h1>Memories Moderation</h1>
          <p>Approve or reject visitor-submitted memories before they go live on the public wall.</p>
        </div>
        <div className="admin-header-actions">
          <button className="icon-btn" onClick={() => loadMemories()} aria-label="Refresh">
            <RefreshCw size={18} />
          </button>
          <button className="logout-btn" onClick={logout}>Log Out</button>
        </div>
      </div>

      <div className="admin-filters">
        {['pending', 'approved', 'rejected', 'all'].map((f) => (
          <button
            key={f}
            className={`filter-chip ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f !== 'all' && ` (${memories.filter((m) => m.status === f).length})`}
          </button>
        ))}
      </div>

      {error && <p className="admin-error">{error}</p>}

      {loading ? (
        <p className="admin-loading">Loading submissions...</p>
      ) : filteredMemories.length === 0 ? (
        <p className="admin-empty">Nothing here.</p>
      ) : (
        <div className="admin-grid">
          {filteredMemories.map((m) => (
            <div key={m.id} className={`admin-card status-${m.status}`}>
              <div className="admin-card-photo">
                {m.photo_url ? (
                  <img src={m.photo_url} alt={`Submission from ${m.name}`} />
                ) : (
                  <div className="no-photo"><ImageOff size={24} /></div>
                )}
              </div>
              <div className="admin-card-body">
                <div className="admin-card-top">
                  <strong>{m.name}</strong>
                  <span className={`status-badge ${m.status}`}>{m.status}</span>
                </div>
                {m.email && <p className="admin-email">{m.email}</p>}
                <p className="admin-message">{m.message}</p>
                <p className="admin-date">{new Date(m.created_at).toLocaleString()}</p>
                <div className="admin-actions">
                  {m.status !== 'approved' && (
                    <button className="approve-btn" onClick={() => updateStatus(m.id, 'approved')}>
                      <CheckCircle2 size={16} /> Approve
                    </button>
                  )}
                  {m.status !== 'rejected' && (
                    <button className="reject-btn" onClick={() => updateStatus(m.id, 'rejected')}>
                      <XCircle size={16} /> Reject
                    </button>
                  )}
                  <button className="delete-btn" onClick={() => deleteMemory(m.id)}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <style>{adminStyles}</style>
    </div>
  );
}

const adminStyles = `
  .admin-login-container {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  .admin-login-card {
    background: #fff;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    max-width: 360px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .admin-login-card svg { color: hsl(28, 70%, 20%); }
  .admin-login-card h2 { font-size: 1.4rem; }
  .admin-login-card p { color: #777; font-size: 0.9rem; margin-bottom: 0.5rem; }
  .admin-login-card input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
  .admin-login-card button {
    width: 100%;
    padding: 0.8rem;
    background: hsl(142, 72%, 26%);
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
  }
  .admin-error { color: #dc3545; font-size: 0.85rem; }

  @media (max-width: 600px) {
    .admin-login-container { padding: 1.25rem; min-height: 70vh; }
    .admin-login-card { padding: 2rem 1.25rem; }
    .admin-container { padding: 2rem 1.25rem; }
    .admin-header { margin-bottom: 1.25rem; }
    .admin-header h1 { font-size: 1.5rem; }
    .admin-grid { grid-template-columns: 1fr; gap: 1rem; }
  }

  .admin-container { padding: 3rem 5%; max-width: 1300px; margin: 0 auto; }
  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .admin-header h1 { font-size: 1.8rem; margin-bottom: 0.25rem; }
  .admin-header p { color: #777; font-size: 0.9rem; }
  .admin-header-actions { display: flex; gap: 0.75rem; }
  .icon-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: 1px solid #ddd; display: flex; align-items: center; justify-content: center;
  }
  .logout-btn {
    padding: 0.6rem 1.2rem; border: 1px solid #ddd; border-radius: 8px; font-size: 0.85rem;
  }

  .admin-filters { display: flex; gap: 0.6rem; margin-bottom: 2rem; flex-wrap: wrap; }
  .filter-chip {
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid #ddd;
    font-size: 0.85rem;
    font-weight: 600;
  }
  .filter-chip.active { background: hsl(142, 72%, 26%); color: #fff; border-color: hsl(142, 72%, 26%); }

  .admin-loading, .admin-empty { color: #777; text-align: center; padding: 3rem; }

  .admin-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .admin-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border-left: 4px solid #ccc;
  }
  .admin-card.status-pending { border-left-color: hsl(35, 75%, 45%); }
  .admin-card.status-approved { border-left-color: hsl(142, 72%, 26%); }
  .admin-card.status-rejected { border-left-color: #dc3545; opacity: 0.7; }

  .admin-card-photo { width: 100%; height: 160px; background: #f0efe9; }
  .admin-card-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .no-photo { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #bbb; }

  .admin-card-body { padding: 1.25rem; }
  .admin-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem; }
  .status-badge {
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
    background: #eee;
    color: #666;
  }
  .status-badge.pending { background: hsla(35, 75%, 45%, 0.15); color: hsl(35, 75%, 35%); }
  .status-badge.approved { background: hsla(142, 72%, 26%, 0.15); color: hsl(142, 72%, 26%); }
  .status-badge.rejected { background: rgba(220,53,69,0.12); color: #dc3545; }

  .admin-email { font-size: 0.8rem; color: #999; margin-bottom: 0.5rem; }
  .admin-message { font-size: 0.9rem; color: #333; margin-bottom: 0.75rem; line-height: 1.5; }
  .admin-date { font-size: 0.75rem; color: #aaa; margin-bottom: 1rem; }

  .admin-actions { display: flex; gap: 0.5rem; }
  .approve-btn, .reject-btn, .delete-btn {
    display: flex; align-items: center; gap: 0.35rem;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid #ddd;
  }
  .approve-btn { color: hsl(142, 72%, 26%); border-color: hsl(142, 72%, 26%); }
  .approve-btn:hover { background: hsl(142, 72%, 26%); color: #fff; }
  .reject-btn { color: #dc3545; border-color: #dc3545; }
  .reject-btn:hover { background: #dc3545; color: #fff; }
  .delete-btn { color: #999; margin-left: auto; }
  .delete-btn:hover { background: #999; color: #fff; }
`;
