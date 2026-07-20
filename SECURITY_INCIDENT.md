# Secret-exposure response

The SSH private key formerly stored as `thaf` and the Laravel application key formerly stored in `docker-compose.yml` must be treated as compromised.

1. Revoke the SSH public key everywhere it is authorized, then create and deploy a replacement key pair.
2. Generate a new Laravel key in the deployed environment with `php artisan key:generate --force`. Never reuse the old key; existing encrypted cookies and sessions will be invalidated.
3. Commit the current-tree removals, then rewrite every affected remote branch from a clean clone:

   ```bash
   git filter-repo --path thaf --path thaf.pub --path frontend/node_modules --path frontend/dist --invert-paths
   git push --force --all
   git push --force --tags
   ```

4. Ask all collaborators to discard old clones and re-clone. Repository history rewrites do not revoke a secret that was already copied, which is why steps 1 and 2 come first.
